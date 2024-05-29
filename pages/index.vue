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
    <main class="flex flex-1 overflow-hidden">
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
        </div>
      </aside>
      <section class="flex-1 p-4 w-full">
        <canvas id="canvas" class="w-full h-full"></canvas>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fabric } from "fabric";

// console.log(fabric);
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
const addText = () => {
  console.log("first");
  const text = new fabric.Text("Merhaba", {
    fill: "white",
    color: "red",
  });
  canvas.value.add(text);
};

onMounted(async () => {
  canvas.value = await new fabric.Canvas("canvas");
});
</script>

<style>
html.dark {
  background-color: #333;
  color: #fff;
}
</style>
