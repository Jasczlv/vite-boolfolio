<template>
  <div>
    {{ message }}
  </div>
  <Index />
</template>

<script>
import Index from "./components/Index.vue";
export default {
  components: {
    Index,
  },
  data() {
    return {
      message: "Pagina iniziale",
    };
  },
};
</script>

<style lang="scss" scoped></style>
