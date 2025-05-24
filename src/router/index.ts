import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurList from "@/components/OurList.vue";
import TodoListView from '@/components/TodoListView.vue'  // Neue Import Meilenstein 3

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/komp',
      name: 'liste',
      component: OurList,
    },
    {                   // Dieser Pfad wurde neu erstellt Meilenstein 03
      path: '/todos',  // Geänderter Pfad
      name: 'todos',   // Neuer Name
      component: TodoListView  // Neue Komponente
    }

  ],
})

export default router
