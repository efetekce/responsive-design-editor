<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";

const { reactiveCanvas, brushColor } = useGlobal();
console.log(reactiveCanvas.value);
console.log(brushColor.value);

const canvasRef = ref(null);
const containerRef = ref(null);
onMounted(() => {
  console.log(reactiveCanvas.value);
  const containerWidth = containerRef.value.clientWidth;
  const containerHeight = containerRef.value.clientHeight;

  const fabricCanvas = new fabric.Canvas("c", {
    isDrawingMode: true,
  });
  fabricCanvas.setDimensions({
    width: containerWidth,
    height: containerHeight,
  });
  fabricCanvas.backgroundColor = "lightgray";
  fabricCanvas.freeDrawingBrush.width = 17;
  fabricCanvas.freeDrawingBrush.color = brushColor.value;
  fabricCanvas.renderAll();

  reactiveCanvas.value = markRaw(fabricCanvas);
  // using markRaw to handle reactivity issues.
  // fitCanvasToContainer();
  window.addEventListener("resize", () => {
    canvasRef.value.width = containerWidth;
    canvasRef.value.height = containerHeight;
  });
});

watch(brushColor, () => {
  reactiveCanvas.value.freeDrawingBrush.color = brushColor.value;
});
</script>

<template>
  <div class="w-full h-full" ref="containerRef">
    <canvas id="c" ref="canvasRef"></canvas>
  </div>
</template>

<style>
canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
}
</style>
