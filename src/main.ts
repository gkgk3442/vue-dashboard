import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js'
// import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";

import { pinia } from "./configs/pinia";
import { installRouter } from "./configs/router";

const app = createApp(App);
app.use(pinia);

installRouter(app);

app.mount("#app");
