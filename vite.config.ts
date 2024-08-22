// vite.config.js
import vue from "@vitejs/plugin-vue";

import { fileURLToPath, URL } from "node:url";
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  define: {
    __VUE_OPTIONS_API__: false,
  },
};
