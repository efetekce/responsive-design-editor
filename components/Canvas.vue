<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";

const { width, height, brushColor } = defineProps(["width", "height"]);
// console.log(width, height);
const reactiveCanvas = ref(null);

onMounted(() => {
  console.log(canvas.value);

  const htmlCanvas = document.getElementById("canvas");
  const canvasContainer = document.getElementById("canvasContainer");
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const fabricCanvas = new fabric.Canvas("canvas", {
    isDrawingMode: true,
  });
  fabricCanvas.freeDrawingBrush.width = 17;
  fabricCanvas.backgroundColor = "lightgray";
  fabricCanvas.freeDrawingBrush.color = brushColor;

  fabricCanvas.renderAll();

  canvas.value = markRaw(fabricCanvas);
  // canvas.value.freeDrawingBrush.color = brushColor.value;
  //   canvas.value = fabricCanvas;
  // using markRaw to handle reactivity issues.
});

watch(brushColor, () => {
  reactiveCanvas.value.freeDrawingBrush.color = brushColor.value;
});
const resizeCanvas = () => {
  canvas.width = canvasContainer.clientWidth;
  canvas.height = canvasContainer.clientHeight;
};

const addRect = () => {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "green",
    width: 50,
    height: 50,
  });
  canvas.value.add(rect).setActiveObject(rect);
  canvas.value.isDrawingMode = false;
  // console.log(canvas.value);
  // console.log("rect");
};

const addCircle = () => {
  const circle = new fabric.Circle({
    fill: "blue",
    radius: 100,
  });
  canvas.value.add(circle).setActiveObject(circle);
  canvas.value.isDrawingMode = false;

  // canvas.value.add(markRaw(circle)).setActiveObject(circle);
};

const addText = () => {
  const text = new fabric.Textbox("Merhaba", {
    fill: "green",
  });
  canvas.value.add(text);
  canvas.value.isDrawingMode = false;
};

const clearCanvas = () => {
  // console.log(canvas.value);
  canvas.value.getObjects().forEach((obj) => {
    if (obj !== canvas.value.backgroundColor) {
      canvas.value.remove(obj);
    }
  });
  canvas.value.renderAll();
};

const toggleBrush = () => {
  canvas.value.isDrawingMode = true;
};
const toggleSelect = () => {
  canvas.value.isDrawingMode = false;
};
</script>

<template>
  <div
    class="bg-red-400 m-auto p-2"
    id="canvasContainer"
    :style="{ width: 500, height: 500 }"
  >
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
</template>

<style>
canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
  width: 100%;
  height: 100%;
}
</style>
