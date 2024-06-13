import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./paths/Home.vue";
import Portfolio from "./paths/Portfolio.vue";
import Contact from "./paths/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
