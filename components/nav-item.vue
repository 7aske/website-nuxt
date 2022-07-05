<template>
  <NuxtLink class="nav-item" active-class="active" :to="to">{{ text }}</NuxtLink>
</template>

<style scoped lang="scss">
@import "assets/stylesheets/index";

.nav-item {
  padding: 0 1em;
  color: rgb(var(--v-theme-secondary));

  @include breakpoint(lg-and-down) {
    padding: 0 0.5em;
  }

  &:hover {
    color: rgb(var(--v-theme-info));
  }

  &.active {
    color: rgb(var(--v-theme-primary));
  }
}
</style>

<script>
export default {
  props: {
    to: String,
    text: String,
  },
};
</script>
