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
    <aside class="flex flex-col gap-4 bg-gray-200 p-4">
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

      <button>
        <!-- <input
          type="color"
          name=""
          id=""
          @change="(e) => $emit('color', e.target.value)"
        /> -->
      </button>
      <button>
        <ColorPicker
          shape="circle"
          format="hex"
          v-model:pureColor="brushColor"
          disableHistory
          disableAlpha
        />
      </button>
      <!--   :update:pureColor="
            () => {
              reactiveCanvas.value.freeDrawingBrush.color = brushColor.value;
            } -->
    </aside>
  </div>
</template>

<style scoped></style>
