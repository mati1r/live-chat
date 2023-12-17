import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config';
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

//auth guard
function requireAuth(to, from, next){
  let user = auth.currentUser

  if(!user)
  {
    next({ name: 'Welcome' })
  }
  else
  {
    next()
  }
}

function requierNoAuth(to, form, next){
  let user = auth.currentUser

  if(user)
  {
    next({ name: 'Chatroom' })
  }
  else
  {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requierNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
