import { createApp } from "vue";
import App from "./App.vue";
import i18nPlugin from "./plugins/i18n";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./style.css";

import router from "./route";
// @ts-ignore
 import focus  from '@/views/directives/focus.ts'

let app = createApp(App);

app.directive('focus',focus)

app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});

app.use(ElementPlus);

app.use(router);

app.mount("#app");
