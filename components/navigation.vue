<template>
  <div class="navigation">
    <nav-item v-for="item in navItems" :to="item.to" :text="item.text" />
  </div>
</template>

<style lang="scss" scoped>
  .navigation {
    padding-bottom: .5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<script>
const pages = [
  {
    to:"/",
    text:"index"
  },
  {
    to:"/projects",
    text:"projects"
  },
  {
    to:"/experience",
    text:"experience"
  },
  {
    to:"/about",
    text:"about"
  },
];
export default {
  data: function () {
    return {
      navItems: pages
    }
  }
}
</script>
