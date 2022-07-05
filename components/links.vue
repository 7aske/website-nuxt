<template>
  <div class="links">
    <link-item v-for="contact in contactInfo" :icon="contact.icon" :url="contact.url" :description="contact.description"/>
  </div>
</template>

<style scoped lang="scss">
@import "assets/stylesheets/index";

.links {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 2em;
  width: 40em;
  @include breakpoint(md-and-down) {
    width: 100%;
  }
}

</style>

<script lang="ts">

import { Contact } from "~/common/Contact";

const contactInfo: Contact[] = [
  {
    icon: "fa:fa fa-at",
    url: "mailto://nik@7aske.com",
    name: "",
    description: "Email",
  },
  {
    icon: "fa:fa-brands fa-github",
    url: "https://github.com/7aske",
    name: "",
    description: "GitHub",
  }, {
    icon: "fa:fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/7aske/",
    name: "",
    description: "LinkedIn",
  }, {
    icon: "fa:fa-brands fa-facebook",
    url: "https://facebook.com/7aske",
    name: "",
    description: "Facebook",
  }, {
    icon: "fa:fa-brands fa-instagram",
    url: "https://instagram.com/7aske",
    name: "",
    description: "Instagram",
  }, {
    icon: "fa:fa fa-file-download",
    url: "/pdf/cv_nikola_tasic.pdf",
    name: "",
    description: "Download CV",
  }];

export default {
  data: function () {
    return {
      contactInfo,
    };
  },
};

</script>
