
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';



const app = createApp(App);

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Lara,
        options: {
            prefix: 'p',
            darkModeSelector: '',
            cssLayer: false
        }
    }
 });
app.mount('#app');
