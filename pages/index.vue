<script setup lang="ts">
const { width, height } = useWindowSize();
useHead({
  title: "Design Editor",
});
</script>

<template>
  <div class="flex flex-col min-h-screen transition-colors duration-1000">
    <header
      class="flex justify-around items-center bg-[#002333] p-4 text-white"
    >
      <h1 class="font-bold text-[#00ff83] text-2xl">Design Editor</h1>

      <span>{{ width }} {{ height }}</span>
      <Export />
      <ThemeButton />
    </header>
    <main class="flex-grow place-items-center grid p-4">
      <div
        class="flex lg:flex-row flex-col justify-between lg:justify-evenly items-stretch gap-4 w-full h-full"
      >
        <Toolbar />
        <Canvas />
      </div>
    </main>
  </div>
</template>
