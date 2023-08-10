// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      // template: {
      //   compilerOptions: {
      //     // 将所有带短横线的标签名都视为自定义元素
      //     isCustomElement: (tag) => tag.includes("-"),
      //   },
      // },
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  define:{
    '__VUE_OPTIONS_API__':false
  }
};
