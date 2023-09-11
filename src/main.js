import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa la configuración de Vue Router

const app = createApp(App);
app.use(router);
app.mount('#app');