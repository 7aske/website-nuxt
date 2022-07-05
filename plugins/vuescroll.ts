import { defineNuxtPlugin } from "#app";
import CustomScrollbar from "custom-vue-scrollbar";
import "custom-vue-scrollbar/dist/style.css";
// import PerfectScrollbar from 'vue3-perfect-scrollbar'
// import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export default defineNuxtPlugin((nuxtApp) => {
	// nuxtApp.vueApp.use(PerfectScrollbar);
	nuxtApp.vueApp.component(CustomScrollbar.name, CustomScrollbar);
});
