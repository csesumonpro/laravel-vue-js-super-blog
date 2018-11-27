
require('./bootstrap');
window.Vue = require('vue');

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue'));


const router = new VueRouter({
    routes // short for `routes: routes`
})



const app = new Vue({
    el: '#app',
    router
});
