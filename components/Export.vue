<script setup>
const { downloadImage } = useGlobal();
</script>

<template>
  <button
    @click="downloadImage"
    class="bg-gray-600 hover:bg-gray-700 p-2 rounded-lg active:scale-75 text-3xl hover:text-[#00ff83] transition duration-100"
  >
    <span class="flex"> <Icon name="ph:export-bold" /></span>
  </button>
</template>

<style scoped></style>
