import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/HelloWorld.vue";
import A from "../components/animationA.vue";
import B from "../components/animationB.vue";
import C from "../components/C.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/c", component: C },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
