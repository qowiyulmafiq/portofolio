<script lang="ts">
	import { cn } from '#lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<hr class={cn('border-0 border-t-2 border-ink', className)} />
