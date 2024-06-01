<script setup>
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const emits = defineEmits([
  "addRect",
  "addCircle",
  "addText",
  "clearCanvas",
  "toggleBrush",
]);
</script>

<template>
  <div>
    <aside class="flex flex-col gap-4 bg-gray-200 p-4">
      <button
        @click="$emit('addText')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="ph:text-aa" />
      </button>
      <button
        @click="$emit('addRect')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="ph:rectangle" />
      </button>

      <button
        @click="$emit('addCircle')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="ph:circle-light" />
      </button>
      <button
        @click="$emit('toggleBrush')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="lucide:brush" />
      </button>
      <button
        @click="$emit('clearCanvas')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="lucide:trash" />
      </button>

      <button>
        <ColorPicker
          v-model="pureColor"
          shape="circle"
          format="hex"
          class="bg-white"
        />
      </button>
    </aside>
  </div>
</template>

<style scoped></style>
