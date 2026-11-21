import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // GitHub Pages project sites are served from /<repository-name>. The deploy
  // workflow sets BASE_PATH from the repository name so the two always match.
  const env = loadEnv(mode, ".", "BASE_PATH");
  const base =
    command === "serve"
      ? ""
      : ((env.BASE_PATH || "/portofolio") as `/${string}`);

  return {
    plugins: [
      tailwindcss(),
      sveltekit({
        compilerOptions: {
          // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
          runes: ({ filename }) =>
            filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
        },
        adapter: adapter({
          pages: "build",
          assets: "build",
          fallback: "404.html",
          precompress: false,
          strict: true,
        }),
        paths: {
          base,
        },
      }),
    ],
  };
});
