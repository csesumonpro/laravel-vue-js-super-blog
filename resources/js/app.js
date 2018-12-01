
require('./bootstrap');
window.Vue = require('vue');

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('admin-main', require('./components/admin/AdminMaster.vue'));

// V-form
import { Form, HasError, AlertError } from 'vform'


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'history'
})



const app = new Vue({
    el: '#app',
    router,

});
