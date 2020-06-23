import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = 
[
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "about" */ '../views/Report.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => 
{
   const accessToken: string | null = localStorage.getItem('access_token');

  if(to.matched.some(item => item.meta.requiresAuth == null || !item.meta.requiresAuth)) 
  {
    if(to.name == "Login" && accessToken != null)  next({ path: '/', params: { nextUrl: to.fullPath } }); else next();    
  }
  else
  {
      if(to.name == "Login" && accessToken != null)  
        next({ path: '/', params: { nextUrl: to.fullPath } });
      else if ( accessToken == null) 
        next({ path: '/login' })
      else
        next();
  }
});

export default router
