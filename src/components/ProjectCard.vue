<template>
  <ul>
    <li v-for="project in projectsProp" :key="project.id">
      <span>{{ project.name }}</span>
      <p>{{ project.description }}</p>
      <a :href="project.giturl" target="_blank">Link Github</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    projectsProp: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
