<script setup>
const darkMode = ref(false);

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};
</script>

<template>
  <button
    @click="toggleTheme"
    class="bg-gray-600 hover:bg-gray-700 p-2 rounded-lg hover:text-[#00ff83] transition duration-100 active:scale-75"
  >
    <span v-if="darkMode">
      <Icon name="cil:sun" />
    </span>
    <span v-else>
      <Icon name="cil:moon" />
    </span>
  </button>
</template>

<style scoped>
span {
  @apply text-3xl flex;
}
</style>
