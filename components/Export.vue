<script setup>
const { downloadImage } = useGlobal();
</script>

<template>
  <button @click="downloadImage">
    <Icon name="ph:export-bold" />
  </button>
</template>

<style scoped></style>
