<script lang="ts">
  import { resize, start, stop } from "$lib/particles";
  import { onMount, onDestroy } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    start(canvas);

    window.onresize = resize;
  });
  onDestroy(stop);
</script>

<header class="h-screen w-full">
  <canvas class="flex h-full w-full" bind:this={canvas} />
</header>
