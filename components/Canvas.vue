<script setup>
const props = defineProps(["width", "height"]);
</script>

<template>
  <section class="bg-red-400 m-auto p-2">
    <canvas id="canvas" :width="width" :height="height"></canvas>
  </section>
</template>

<style scoped>
canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
}
</style>
