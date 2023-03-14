import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import CounterVue from "@/views/CounterVue.vue";
import store from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/counter",
    },
    {
      path: "/counter",
      name: "CounterVue",
      component: CounterVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

createApp(App).use(router).use(store).mount("#app");
