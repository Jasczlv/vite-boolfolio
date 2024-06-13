<template>
  <h1>Pagina Home</h1>
  <ProjectCard :projectsProp="projects" />
</template>

<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
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
            perPage: 10,
          },
        })
        .then((res) => {
          // console.log(res.data.results.data);
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
