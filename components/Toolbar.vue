<script setup>
const emits = defineEmits([
  "addRect",
  "addCircle",
  "addText",
  "clearCanvas",
  "toggleBrush",
  "toggleSelect",
  "color",
]);
const props = defineProps(["color"]);

const { counter, increment } = useToolbar();
console.log(counter.value);
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
      <button @click="increment">{{ counter }}</button>
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
        @click="$emit('toggleSelect')"
        class="bg-blue-500 p-2 rounded text-white"
      >
        <Icon name="lucide:hand" />
      </button>
      <button
        @click="$emit('clearCanvas')"
        class="bg-blue-500 p-2 rounded text-white"
      >
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
          :update:pureColor="
            () => {
              canvas.value.freeDrawingBrush.color = brushColor.value;
            }
          "
        />
      </button>
    </aside>
  </div>
</template>

<style scoped></style>
