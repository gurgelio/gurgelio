<script lang="ts">
  import particles from "$lib/particles";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    particles(canvas);
  });
</script>

<header class="h-screen w-full">
  <canvas class="flex h-full w-full" bind:this={canvas} />
</header>
