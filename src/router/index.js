import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { HOME_VIEW } from '../constants/views.js';

import HomeView from '../views/HomeView.vue';

const routes = [
  {
    name: 'root',
    path: '/',
    component: HomeView,
    meta: {
      title: HOME_VIEW.TITLE
    }
  },
  {
    name: 'home',
    path: '/home',
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  store,
});

export default router;
