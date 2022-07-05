import { defineNuxtPlugin } from "#app";
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { createVuetify } from "vuetify";
import { aliases, fa } from 'vuetify/lib/iconsets/fa4'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { mdi } from 'vuetify/lib/iconsets/mdi'
import * as components from "vuetify/components";

library.add(fab);
library.add(fas);

const theme = {
	nord0: "#2e3440",
	nord1: "#3b4252",
	nord2: "#434c5e",
	nord3: "#4c566a",
	nord4: "#d8dee9",
	nord5: "#e5e9f0",
	nord6: "#eceff4",
	nord7: "#8fbcbb",
	nord8: "#88c0d0",
	nord9: "#81a1c1",
	nord10: "#5e81ac",
	nord11: "#bf616a",
	nord12: "#d08770",
	nord13: "#ebcb8b",
	nord14: "#a3be8c",
	nord15: "#b48ead",
};

const dark = {
	dark: true,
	colors: {
		background: theme.nord1,
		surface: theme.nord0,
		"surface-lighten-1": theme.nord3,
		primary: theme.nord13,
		text: theme.nord4,
		// "primary-darken-1": "#3700B3",
		secondary: theme.nord10,
		// "secondary-darken-1": "#018786",
		error: theme.nord11,
		info: theme.nord8,
		success: theme.nord14,
		warning: theme.nord12,
		...theme,
	},
};

const light = {
	dark: false,
	colors: {
		background: theme.nord6,
		surface: theme.nord5,
		"surface-lighten-1": theme.nord6,
		primary: theme.nord15,
		text: theme.nord0,
		// "primary-darken-1": "#3700B3",
		secondary: theme.nord10,
		// "secondary-darken-1": "#018786",
		error: theme.nord11,
		info: theme.nord8,
		success: theme.nord14,
		warning: theme.nord12,
		...theme,
	},
};

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				fa,
				mdi,
			}
		},
		theme: {
			defaultTheme: "dark",
			themes: {
				dark,
				light,
			},
		},
	});
	nuxtApp.vueApp.use(vuetify);
});
