
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

import Swal from 'sweetalert2'
window.Swal=Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast=Toast; 
window.Fire=new Vue(); 

window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Users from './components/Users.vue'
import Profile from './components/Profile.vue'
import NewDumpers from './components/NewDumpers.vue'
Vue.use(VueRouter)


import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})


let routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/newdumpers', component: NewDumpers },
    { path: '/profile', component: Profile }
  ]

const router = new VueRouter({
    mode: 'history', // This will remove #home from url
    routes, // short for `routes: routes`
    linkActiveClass: 'active' // for active class in menu
})

Vue.filter('upText',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}
);

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
