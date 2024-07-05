import { createApp, watch } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";

import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  { deep: true }
);

app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Lara,
    options: {
      prefix: "p",
      darkModeSelector: "",
      cssLayer: false,
    },
  },
});
app.use(pinia);

app.mount("#app");
