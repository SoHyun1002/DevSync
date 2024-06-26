import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Home from '@/pages/Home.vue'
import Page404 from '@/pages/Page404.vue'
import SignIn from '@/pages/SignIn.vue'
import SignUp from '@/pages/SignUp.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import Blank from '@/pages/Blank.vue'
import CodeReviews from '@/pages/CodeReviews.vue'
import Forms from '@/pages/Forms.vue'
import ReadMore from '@/pages/ReadMore.vue'
import Profile from '@/pages/Profile.vue'



/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/profile', // the url
    component: Profile, // view rendered
  },
  {
    path: '/home', // the url
    component: Home, // view rendered
  },
  {
    path: '/signin', // the url
    component: SignIn, // view rendered
  },
  {
    path: '/signup', // the url
    component: SignUp, // view rendered
  },
  {
    path: '/forgot-password', // the url
    component: ForgotPassword, // view rendered
  },
  {
    path: '/blank', // the url
    component: Blank, // view rendered
  },
  {
    path: '/codereviews', // the url
    component: CodeReviews, // view rendered
  },
{
    path: '/forms',
    component: Forms,
  },
  {
    path: '/readmore/:id',
    component: ReadMore,
  },
//   {
//     path: '/forms',
//     component: Forms,
//   },
//   {
//     path: '/cards',
//     component: Cards,
//   },
//   {
//     path: '/charts',
//     component: Charts,
//   },
//   {
//     path: '/buttons',
//     component: Buttons,
//   },
//   {
//     path: '/modals',
//     component: Modals,
//   },
//   {
//     path: '/tables',
//     component: Tables,
//   },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
    
  },
  {
    path: '/404',
    component: Page404,
  },
//   {
//     path: '/blank',
//     component: Blank,
//   },
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
});