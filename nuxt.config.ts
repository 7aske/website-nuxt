import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	target: "static",
	css: [
		"vuetify/lib/styles/main.sass",
		"@/assets/stylesheets/index.scss"
	],
	build: {
		transpile: ["vuetify", "custom-vue-scrollbar"],
	},
	runtimeConfig: {
		public: {
			host: "https://7aske.com"
		}
	},
	vite: {
		define: {
			"process.env.DEBUG": "false",
		},
	},
});
