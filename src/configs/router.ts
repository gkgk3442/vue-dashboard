import { App } from 'vue'
import { createRouter, createWebHistory, RouteLocation, RouteRecordRaw } from 'vue-router'

import ErrorPage from '../views/ErrorPage.vue'

// const registerGuards: NavigationGuardWithThis<undefined> = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   try {
//     const res = await $axiosHeader().get('/api/web/auth/is-init-register')

//     if (!res.data) {
//       next('/login')
//       return
//     }
//   } catch (e) {
//     axiosErrorHandler(next, e)
//     return
//   }

//   next()
// }

// const axiosErrorHandler = (next: NavigationGuardNext, e: any) => {
//   const status = e.response ? e.response.status : 500;
//   const statusText = e.response ? e.response.statusText : e.code;
//   const path = e.config.url;
//   const message = e.message;

//   next({
//     name: "errorPage",
//     params: {
//       status,
//       statusText,
//       path,
//       message,
//     },
//   });
// };

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    name: 'errorPage',
    props: true,
    component: ErrorPage,
  },
  {
    path: '/',
    name: 'home',
    // beforeEnter: loginGuards,
    component: () => import(/* webpackChunkName: "home" */ '../views/IndexPage.vue'),
  },
  {
    path: '/ds1',
    // redirect: "/ds1",
    component: () => import(/* webpackChunkName: "ds1" */ '../views/DashBoard1.vue'),
    // children: [
    //   {
    //     path: "sys/main",
    //     beforeEnter: authenticationGuards,
    //     component: () =>
    //       import(/* webpackChunkName: "sys" */ "../views/sys/MainPage.vue"),
    //   },
    //   {
    //     path: "web/access-ip",
    //     beforeEnter: authenticationGuards,
    //     component: () =>
    //       import(/* webpackChunkName: "web" */ "../views/web/AccessIpPage.vue"),
    //   },
    //   {
    //     path: "web/account",
    //     beforeEnter: authenticationGuards,
    //     component: () =>
    //       import(/* webpackChunkName: "web" */ "../views/web/AccountPage.vue"),
    //   },
    // ],
  },
  {
    path: '/ds2',
    name: 'ds2',
    // beforeEnter: loginGuards,
    component: () => import(/* webpackChunkName: "home" */ '../views/DashBoard2.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: (to: RouteLocation) => {
      return {
        name: 'errorPage',
        params: { status: 404, statusText: 'Not Found', path: to.path },
      }
    },
  },
]

export const installRouter = (app: App<Element>) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  app.use(router)

  return router
}
