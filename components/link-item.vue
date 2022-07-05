<template>
  <div class="link">
    <a rel="noreferrer" target="_blank" class="hover-text" :href="url">
      <v-icon :icon="icon"/>
    </a>
  </div>
</template>

<style lang="scss">
@import "assets/stylesheets/index";

.link {
  a {
    text-decoration: none;
    color: rgb(var(--v-theme-text));
    font-size: 2em;

    @include breakpoint(md-and-down) {
      font-size: 1.5em;
    }
    i {
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      i {
        transform: scale(1.5);
      }

      color: rgb(var(--v-theme-primary));
    }
  }
}
</style>

<script>

export default {
  props: {
    icon: String,
    description: String,
    url: String,
  },
};
</script>
