import '@/style/fonts.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// https://seb-l.github.io/pinia-plugin-persist
// eslint-disable-next-line import/no-extraneous-dependencies
import piniaPersist from 'pinia-plugin-persist';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router/routes';
// https://pinia.vuejs.org/

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* CSS Animations  */
import './style/animations.css';

/* instanciate store */
const pinia = createPinia()
  .use(piniaPersist);
const app = createApp(App)
  .use(IonicVue)
  .use(pinia)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
