import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import GameView from '../views/GameView.vue'
import ItemsView from '@/views/ItemsView.vue'
import MonstersView from '@/views/MonstersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/games'
    },
    {
      path: '/games',
      name: 'games',
      component: GameView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsView
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: MonstersView
    }
  ]
})

export default router
