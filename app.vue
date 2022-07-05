<template>
  <v-app :theme="theme">
    <v-main>
      <v-container class="d-flex justify-end" fluid>
        <v-btn @click="toggleTheme" :flat=true>
          <v-icon icon="mdi-theme-light-dark"/>
        </v-btn>
      </v-container>
      <v-container fluid>
        <div class="center-absolute">
          <navigation/>
          <NuxtPage/>
          <links/>
        </div>
      </v-container>
    </v-main>
    <footer>
      <v-row>
        <v-col class="text-center">
          Powered by <a href="https://v3.nuxtjs.org/">
          <v-icon icon="fa:fa-brands fa-vuejs"/>
        </a>
        </v-col>
      </v-row>
    </footer>
  </v-app>
</template>

<style scoped lang="scss">
footer {
  color: rgb(var(--v-theme-text));
  a {
    text-decoration: none;
    color: rgb(var(--v-theme-secondary));
  }
}
</style>

<script>
import {ref} from "vue";

export default {
  setup() {
    const config = useRuntimeConfig();

    const theme = ref("dark");
    useHead({
      titleTemplate: "Nikola Tasić - %s",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {name: "description", content: "7aske's website"},
        {name: "author", content: "Nikola Tasić"},
        {name: "description", content: "Hello! My name is Nikola. I'm a nerd and an aspiring software engineer."},
        {name: "keywords", content: "software, engineer, developer"},
        {name: "og:url", content: config.host},
        {name: "og:title", content: "7aske.com - Nikola Tasić"},
        {name: "og:description", content: "Hello! My name is Nikola. I'm a nerd and an aspiring software engineer."},
        {name: "og:image", content: config.host + "/og_image.jpg"},
        {name: "twitter:card", content: ""},
        {name: "twitter:url", content: config.host},
        {name: "twitter:title", content: "7aske.com - Nikola Tasić"},
        {
          name: "twitter:description",
          content: "Hello! My name is Nikola. I'm a nerd and an aspiring software engineer.",
        },
        {name: "twitter:image", content: config.host +  "/og_image.jpg"},
      ],
    });

    return {
      theme,
      toggleTheme: () => theme.value = theme.value === "light" ? "dark" : "light",
    };
  },
};
</script>
