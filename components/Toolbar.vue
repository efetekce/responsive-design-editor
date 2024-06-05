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
      class="flex lg:flex-col justify-evenly items-center gap-2 bg-gray-400 dark:bg-[#002333] p-4 rounded-xl w-full h-full text-3xl transition-colors duration-500"
    >
      <button
        class="flex justify-center items-center bg-transparent lg:pl-7"
        @click="toggleBrush"
      >
        <ColorPicker
          shape="circle"
          format="hex"
          v-model:pureColor="brushColor"
          disableHistory
          disableAlpha
        />
      </button>

      <button @click="toggleBrush">
        <Icon name="lucide:pencil" />
      </button>
      <button @click="toggleSelect">
        <Icon name="lucide:hand" />
      </button>
      <button @click="addText">
        <Icon name="ph:text-aa" />
      </button>
      <button @click="addRect">
        <Icon name="ph:rectangle" />
      </button>
      <!-- <button @click="increment">{{ counter }}</button> -->
      <button @click="addCircle">
        <Icon name="ph:circle-light" />
      </button>

      <button @click="clearCanvas">
        <Icon name="lucide:trash" />
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
