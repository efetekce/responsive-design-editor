<script setup>
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const brushColor = ref("red");
const canvasWidth = ref(500);
const canvasHeight = ref(500);

// onMounted(() => {});

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
        @toggle-select="toggleSelect"
        @color="changeColor"
      />

      <Canvas
        :width="canvasWidth"
        :height="canvasHeight"
        :brushColor="brushColor"
      />
    </main>
  </div>
</template>

<style></style>
