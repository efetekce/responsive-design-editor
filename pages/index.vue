<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-between items-center bg-gray-800 p-4 w-full text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>
      <ThemeButton />
    </header>
    <main class="flex justify-around items-center m-auto">
      <Toolbar />
      <section class="bg-red-400 m-auto p-2 max-w-full h-auto">
        <canvas id="canvas" class="w-full h-full"></canvas>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";

// let canvas;
// canvas = new fabric.Canvas("canvas", {
//   isDrawingMode: true,
// });

const canvas = ref(null);
const addRect = () => {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "green",
    width: 50,
    height: 50,
  });
  canvas.value.add(rect);
  console.log(canvas.value);
};
const addCircle = () => {
  const circle = new fabric.Circle({
    fill: "blue",
    radius: 100,
  });
  canvas.value.add(circle);
  // canvas.value.add(markRaw(circle)).setActiveObject(circle);
};

const addText = () => {
  console.log("first");
  const text = new fabric.Text("Merhaba", {
    fill: "green",
  });
  canvas.value.add(text);
};

onMounted(() => {
  const fabricCanvas = new fabric.Canvas("canvas", {
    isDrawingMode: true,
    backgroundColor: "blue",
    // freeDrawingBrush.width: 30,
  });

  canvas.value = markRaw(fabricCanvas);
  // using markRaw to handle reactivity issues.
});
</script>

<style>
html.dark {
  background-color: #333;
  color: #fff;
  color-scheme: dark;
}
canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
}
</style>
