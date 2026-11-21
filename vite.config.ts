import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, ".", "");
  const isVercel = env.VERCEL === "1";

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
          base: command === "serve" || isVercel ? "" : "/portofolio",
        },
      }),
    ],
  };
});
