import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.sass";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App);

app.use(createPinia());

library.add(faSquareMinus);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
