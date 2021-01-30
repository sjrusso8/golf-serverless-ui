import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from "./store";
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import './assets/tailwind.css'

createApp(App)
    .use(router)
    .use(store)
    .use(VueHighcharts, { Highcharts })
    .mount('#app')
