import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../pages/Msite/Msite";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Seacher from "../pages/Seacher/Seacher";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/Seacher',
      component: Seacher
    },
  ]
})
