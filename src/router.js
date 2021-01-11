import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import speech from "./components/speech.vue";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/speech",
        name: "speech",
        component: speech,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
