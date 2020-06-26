import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = 
[
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Portfolio.vue'),
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
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: () => import('../views/ChangePassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/portfolio',
  //   name: 'Portfolio',
  //   component: () => import('../views/Portfolio.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/bankaccount/view/:id',
    name: 'ViewBankAccount',
    component: () => import('../views/BankAccountView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/bankaccount/new/:type',
    name: 'NewBankAccount',
    component: () => import( '../views/BankAccountForm.vue'),
    meta: {
      requiresAuth: true
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
