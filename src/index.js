import { createApp } from "vue";
import App from "./app.vue";

const container = document.createElement("div");
container.id = "app";

document.body.appendChild(container);

const app = createApp(App);
app.mount("#app");
