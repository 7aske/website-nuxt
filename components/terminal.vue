<template>
  <div class="terminal rounded-lg elevation-16">
    <custom-scrollbar :style="{ height: '23em' }">
      <slot/>
    </custom-scrollbar>
  </div>
</template>

<style scoped lang="scss">
@import "assets/stylesheets/index";

.terminal {
  font-size: 1.2rem;
  overflow-y: hidden;
  background-color: rgb(var(--v-theme-surface));

  padding: 0.5em;
  height: 24em;
  width: 40em;
  @include breakpoint(lg-and-down) {
    width: 100%;
  }
}
</style>
