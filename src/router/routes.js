import Login from "../pages/Login.vue"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/Home.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('pages/Perfil.vue'),
    meta: {
      requiereAuth: true
    }
  }
]

export default routes
