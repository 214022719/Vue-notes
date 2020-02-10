import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Notes from '@/components/Notes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/notes',
      name:'Notes',
      component: Notes,
      beforeEnter: (to, from, next) => {    
       if(window.sessionStorage.getItem("isLogin")=="true"){
         next();
       }else{
         next('/');
       }
     }
   }
  

  ]
})