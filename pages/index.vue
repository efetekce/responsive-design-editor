<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-between items-center bg-gray-800 p-4 text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>
      <button
        @click="toggleTheme"
        class="bg-gray-600 hover:bg-gray-700 p-2 rounded"
      >
        Tema Değiştir
      </button>
    </header>
    <main class="flex justify-center items-center">
      <aside class="md:block hidden bg-gray-200 p-4 w-64">
        <div class="mb-4">
          <button @click="addRect" class="bg-blue-500 p-2 rounded text-white">
            Dikdörtgen Ekle
          </button>
        </div>
        <div>
          <button @click="addText" class="bg-blue-500 p-2 rounded text-white">
            Metin Ekle
          </button>
          <button @click="addCircle" class="bg-blue-500 p-2 rounded text-white">
            Daire Ekle
          </button>
        </div>
      </aside>
      <section class="flex justify-center items-center bg-red-400 p-4 w-full">
        <canvas id="canvas" width="500" height="500"></canvas>
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

const darkMode = ref(false);

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};

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
    // isDrawingMode: true,
    backgroundColor: "blue",
  });

  canvas.value = markRaw(fabricCanvas);
  // using markRaw to handle reactivity issues.
});
</script>

<style>
html.dark {
  background-color: #333;
  color: #fff;
}

canvas {
  /* background-color: aqua; */
  border: 2px #333 solid;
}
</style>
