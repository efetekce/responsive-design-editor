<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-between items-center bg-gray-800 p-4 w-full text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>
      <ThemeButton />
    </header>
    <main class="flex justify-around items-center m-auto">
      <Toolbar
        @add-circle="addCircle"
        @add-text="addText"
        @add-rect="addRect"
        @clear-canvas="clearCanvas"
      />
      <Canvas />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";
const canvas = ref(null);

onMounted(() => {
  const fabricCanvas = new fabric.Canvas("canvas", {
    isDrawingMode: true,
    backgroundColor: "blue",
    width: 1000,
    height: 1000,
    // freeDrawingBrush.width: 30,
  });
  fabricCanvas.freeDrawingBrush.width = 17;
  fabricCanvas.renderAll();
  canvas.value = markRaw(fabricCanvas);

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
  // canvas.value.add(markRaw(circle)).setActiveObject(circle);
};

const addText = () => {
  console.log("first");
  const text = new fabric.Text("Merhaba", {
    fill: "green",
  });
  canvas.value.add(text);
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
</script>

<style>
html.dark {
  background-color: #333;
  color: #fff;
  color-scheme: dark;
}
</style>
