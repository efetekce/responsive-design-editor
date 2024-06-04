// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // build: {
  //   transpile: ["vue3-colorpicker"],
  // },
  devtools: { enabled: true },
  ssr: false,
  // using csr to work with canvas.
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@vueuse/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
