// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import GreekView from '@/views/GreekView.vue';
import NordicView from '@/views/NordicView.vue';
import EgyptianView from '@/views/EgyptianView.vue';
import JapaneseView from '@/views/JapaneseView.vue';

const routes = [
    { path: '/greek', component: GreekView },
    { path: '/nordic', component: NordicView },
    { path: '/egyptian', component: EgyptianView },
    { path: '/japanese', component: JapaneseView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;