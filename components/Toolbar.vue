<script setup>
const loading = ref(false);
</script>

<template>
  <div>
    <aside class="bg-gray-200 p-4 w-64">
      <div class="mb-4">
        <button @click="addRect" class="bg-blue-500 p-2 rounded text-white">
          Dikdörtgen
        </button>
      </div>
      <div>
        <button @click="addText" class="bg-blue-500 p-2 rounded text-white">
          Metin
        </button>
        <button @click="addCircle" class="bg-blue-500 p-2 rounded text-white">
          Daire
        </button>
      </div>
    </aside>
  </div>
</template>

<style scoped></style>
