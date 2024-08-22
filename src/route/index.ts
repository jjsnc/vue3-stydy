import { createRouter, createWebHashHistory } from "vue-router";

import { defineAsyncComponent } from "vue";
import Home from "../components/HelloWorld.vue";
import animationA from "@/components/animationA.vue";
// import A from "../components/animationA.vue";
// import B from "../components/animationB.vue";
// import C from "../components/C.vue";
// import D from "../components/d.vue";
// import E from "../components/e.vue";
// import F from "../components/f.vue";
// import G from "../components/g.vue";
// import H from "../components/h.vue";
// import I from "../components/i.vue";
// import WatchPage from "../views/watch/index.vue";
// import WatchEffectPage from "../views/watchEffect/index.vue";
import directivesPage from "../views/directives/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/a", component: animationA },
  // { path: "/b", component: B },
  // { path: "/d", component: D },
  // { path: "/e", component: E },
  // { path: "/f", component: F },
  // { path: "/g", component: G },
  // { path: "/h", component: H },
  // { path: "/i", component: I },
  // { path: "/watch", component: WatchPage },
  // { path: "/watchEffect", component: WatchEffectPage },
  {
    path: "/directives",
    component: () => import("../views/directives/index.vue"),
  },
  { path: "/vSlots", component: () => import("../views/slots/index.vue") },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
