<template>
  <span class="position-subheader">{{ experience.position }}</span><br/>
  <span
      class="date-subheader">{{ formatDate(experience.startDate) }} -&gt; {{ experience.endDate ? formatDate(experience.endDate) : "undefined" }}</span><br/>
  {{ experience.description }}
  <br>
  <br>
</template>

<style scoped lang="scss">
.position-subheader {
  color: rgb(var(--v-theme-primary))
}

.date-subheader {
  color: rgb(var(--v-theme-secondary))
}

</style>

<script lang="ts">
import { formatDate } from "~/common/util/date";

export default {
  props: {
    experience: Object,
  },
  methods: {
    formatDate(date: Date) {
      return formatDate(date);
    },
  },
};
</script>

