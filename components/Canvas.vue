<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";
const { width, height } = useWindowSize();

const { reactiveCanvas, brushColor } = useGlobal();
console.log(reactiveCanvas.value);
console.log(brushColor.value);

const canvasRef = ref(null);
const containerRef = ref(null);

onMounted(() => {
  const fabricCanvas = new fabric.Canvas("c", {
    isDrawingMode: true,
  });
  fabricCanvas.setDimensions({
    width: width.value * 0.85,
    height: height.value * 0.85,
  });
  fabricCanvas.backgroundColor = "#9ca3af";
  fabricCanvas.freeDrawingBrush.width = 17;
  fabricCanvas.freeDrawingBrush.color = brushColor.value;
  fabricCanvas.renderAll();

  reactiveCanvas.value = markRaw(fabricCanvas);
  // using markRaw to handle reactivity issues.

  window.addEventListener("resize", () => {
    // canvasRef.value.width = width;
    // canvasRef.value.height = height;
    reactiveCanvas.value.setDimensions({
      width: width.value * 0.85,
      height: height.value * 0.85,
    });
    console.log(reactiveCanvas.value.width);
    // console.log(canvasRef.value.width);
  });
});
// onUnmounted(() => {
//   window.removeEventListener("resize", updateDimensions);
// });
watch(brushColor, () => {
  reactiveCanvas.value.freeDrawingBrush.color = brushColor.value;
});
</script>

<template>
  <div class="flex justify-center items-center">
    <canvas
      id="c"
      ref="canvasRef"
      class="border-0 shadow-2xl rounded-xl transition duration-150"
    ></canvas>
  </div>
</template>

<style>
canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
}
</style>
