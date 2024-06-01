<script setup>
const emit = defineEmits(["export"]);
</script>

<template>
  <button @click="$emit('export')">
    <Icon name="ph:export-bold" />
  </button>
</template>

<style scoped></style>
