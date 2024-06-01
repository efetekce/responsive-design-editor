<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";

const canvas = ref(null);
const pureColor = ref("red");
const canvasWidth = ref(800);
const canvasHeight = ref(600);

onMounted(() => {
  const fabricCanvas = new fabric.Canvas("canvas", {
    isDrawingMode: true,
    backgroundColor: "blue",

    // freeDrawingBrush.width: 30,
  });
  fabricCanvas.freeDrawingBrush.width = 17;
  // fabricCanvas.freeDrawingBrush.color = pureColor.value;
  // fabricCanvas.width = "100vw";
  fabricCanvas.renderAll();

  canvas.value = markRaw(fabricCanvas);
  canvas.value.freeDrawingBrush.color = pureColor.value;
  //   canvas.value = fabricCanvas;
  // using markRaw to handle reactivity issues.
});
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
  canvas.value.isDrawingMode = !canvas.value.isDrawingMode;
};

const downloadImage = () => {
  const ext = "png";
  const base64 = canvas.value.toDataURL({
    format: ext,
    enableRetinaScaling: true,
  });
  const link = document.createElement("a");
  link.href = base64;
  link.download = `design.${ext}`;
  link.click();
};
</script>

<template>
  <div class="flex flex-col min-h-screen transition-colors duration-1000">
    <header
      class="flex justify-between items-center bg-gray-800 p-4 w-full text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>
      <Export @export="downloadImage" />
      <ThemeButton />
    </header>
    <main class="flex justify-around items-center m-auto">
      <Toolbar
        @add-circle="addCircle"
        @add-text="addText"
        @add-rect="addRect"
        @clear-canvas="clearCanvas"
        @toggle-brush="toggleBrush"
        :color="pureColor"
      />
      <Canvas :width="canvasWidth" :height="canvasHeight" />
    </main>
  </div>
</template>

<style></style>
