import { createApp } from "vue";
import i18nPlugin from "./plugins/i18n";
import "./style.css";
import App from "./App.vue";
import router from "./route";

let app = createApp(App);

app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});
app.use(router).mount("#app");
