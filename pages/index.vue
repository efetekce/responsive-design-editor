<script setup>
const { width, height } = useWindowSize();
</script>

<template>
  <div class="flex flex-col min-h-screen transition-colors duration-1000">
    <header
      class="flex justify-around items-center bg-gray-800 p-4 w-full text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>

      <span>{{ width }} {{ height }}</span>
      <Export />
      <ThemeButton />
    </header>
    <main class="flex-grow place-items-center grid p-4">
      <div
        class="lg:flex flex-col lg:flex-wrap justify-around lg:justify-center items-center lg:items-start"
      >
        <Toolbar />
        <Canvas />
      </div>
    </main>
  </div>
</template>
