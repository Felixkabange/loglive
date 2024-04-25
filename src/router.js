import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HelloWorld.vue';
import Chats from '@/components/Chats.vue';
import UserRegister from '@/components/UserRegister.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/chats', component: Chats },
  { path: '/register', component: UserRegister },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
