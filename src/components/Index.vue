<template>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <span>{{ project.name }}</span>
      <p>{{ project.description }}</p>
      <a :href="project.giturl" target="_blank">Link Github</a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios
        .get("http://127.0.0.1:8000/api/projects", {
          params: {
            page: 1,
            perPage: 5,
          },
        })
        .then((res) => {
          console.log(res.data.results.data);
          this.projects = res.data.results.data;
        });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped></style>
