<script setup>
const { downloadImage } = useGlobal();
</script>

<template>
  <button
    @click="downloadImage"
    class="bg-gray-600 hover:bg-gray-700 p-2 rounded-lg text-3xl"
  >
    <span class="flex"> <Icon name="ph:export-bold" /></span>
  </button>
</template>

<style scoped></style>
