import { createApp } from 'vue';
import App from './App.vue';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// Styling
import './assets/main.scss';

// Donut and line charts
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(bootstrap).use(VueApexCharts).mount('#app');
