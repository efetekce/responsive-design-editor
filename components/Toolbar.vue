<script setup>
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const props = defineProps(["color"]);

const {
  addRect,
  addText,
  addCircle,
  reactiveCanvas,
  brushColor,
  toggleBrush,
  toggleSelect,
  clearCanvas,
} = useGlobal();
</script>

<template>
  <div>
    <menu
      class="flex lg:flex-col justify-evenly items-center gap-2 bg-gray-500 dark:bg-gray-500 p-4 rounded-xl w-full h-full text-3xl transition-colors duration-500"
    >
      <button @click="addText" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="ph:text-aa" />
      </button>
      <button @click="addRect" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="ph:rectangle" />
      </button>
      <!-- <button @click="increment">{{ counter }}</button> -->
      <button @click="addCircle" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="ph:circle-light" />
      </button>
      <button @click="toggleBrush" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="lucide:brush" />
      </button>
      <button @click="toggleSelect" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="lucide:hand" />
      </button>
      <button @click="clearCanvas" class="bg-blue-500 p-2 rounded text-white">
        <Icon name="lucide:trash" />
      </button>
      <button class="flex bg-blue-500 rounded text-white">
        <ColorPicker
          shape="circle"
          format="hex"
          v-model:pureColor="brushColor"
          disableHistory
          disableAlpha
          class="self-center"
        />
      </button>

      <!-- <button class="flex justify-center items-center">
        <ColorPicker
          shape="circle"
          format="hex"
          v-model:pureColor="brushColor"
          disableHistory
          disableAlpha
        />
      </button> -->
      <!--   :update:pureColor="
            () => {
              reactiveCanvas.value.freeDrawingBrush.color = brushColor.value;
            } -->
    </menu>
  </div>
</template>

<style scoped></style>
