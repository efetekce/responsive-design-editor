<script setup></script>

<template>
  <div class="flex flex-col min-h-screen transition-colors duration-1000">
    <header
      class="flex justify-between items-center bg-gray-800 p-4 w-full text-white"
    >
      <h1 class="text-xl">Tasarım Editörü</h1>
      <Export />
      <ThemeButton />
    </header>
    <main class="flex-grow place-items-center grid p-4">
      <div class="flex justify-center items-center w-full h-full">
        <Toolbar />
        <Canvas />
      </div>
    </main>
  </div>
</template>
