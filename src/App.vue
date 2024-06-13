<template>
  <div class="container">
    {{ message }}
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  </div>
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/portfolio">Go to Portfolio</RouterLink>
  <RouterLink to="/contact">Go to Contact</RouterLink>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      message: "Pagina iniziale",
    };
  },
};
</script>

<style lang="scss" scoped></style>
