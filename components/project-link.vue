<template>
  <div class="project-link">
    <a target="_blank" rel="noreferrer" :href="project.href">{{ project.name }}
      <span class="tech rounded-pill" v-if="project.technologies" v-for="tech in project.technologies">{{ tech }}</span>
    </a><br/>
    <p>
      {{ project.description }}
    </p>
    <br>
  </div>
</template>

<style scoped lang="scss">
.project-link {
  &:hover .tech {
    opacity: 1;
  }

  a {

    text-decoration: none;
    color: rgb(var(--v-theme-primary));

    &:hover {
      color: rgb(var(--v-theme-secondary));
    }
  }
}

.faded {
  color: rgb(var(--v-theme-surface-lighten-1));
}


.tech {
  transition: opacity 250ms;
  opacity: 0;
  font-size: .8rem;
  background-color: rgb(var(--v-theme-surface-lighten-1));
  padding: .25em .5em;
  margin-right: .25em;
  color: rgb(var(--v-theme-nord9));
}
</style>

<script>

export default {
  props: {
    project: Object,
  },
};
</script>
