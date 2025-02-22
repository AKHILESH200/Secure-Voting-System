import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './components/User/HomeScreen.vue';
import GeneralLogin from "./components/LogIn.vue";
import Vote_Statisitics from './components/Admin/Vote_Statistics.vue';
import UserRegister from "./components/User/UserRegister.vue";
import AdminHome from "./components/Admin/AdminHome.vue";
import UserVoting from "./components/User/UserVoting.vue";
import DummyPage from "./components/User/dummy.vue"
const routes=[
    {
        name:'HomeScreen',
        component:HomeScreen,
        path: '/',
        meta: { requiresAuth: true } 
    },
    {
        name:'GeneralLogin',
        component:GeneralLogin,
        path:'/login'
    },
    {
        name:'VoteStats',
        component:Vote_Statisitics,
        path:'/votes'
    },
    {
        name:'UserVoting',
        component:UserVoting,
        path:'/vote'
    },
    {
        name:'UserRegister',
        component:UserRegister,
        path:'/register'
    },
    {
        name:'AdminHome',
        component:AdminHome,
        path:'/admin',
        meta: { requiresAuth: true } 
    },
    {
        name:'DummyPage',
        component:DummyPage,
        path:'/dummy',
        meta: { requiresAuth: true } 
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isLoggedIn = localStorage.getItem("user-info")
  
    if (requiresAuth && !isLoggedIn) {
      // If route requires authentication and user is not logged in, redirect to login page
      next({ name: 'GeneralLogin' })
    } else {
      next()
    }
  })
export default router;
