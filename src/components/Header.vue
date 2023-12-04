<script setup lang="ts">
import { useMovieStore } from "~/store/MovieStore";

const movieStore = useMovieStore();
const resetMovies = () => {
  movieStore.$reset();
};
</script>

<template>
  <header>
    <router-link
      :to="{ name: 'home-page' }"
      class="header-title"
      @click="resetMovies"
    >
      GeonHo's Search Movies
    </router-link>
  </header>
</template>

<style scoped lang="scss">
header {
  color: var(--main-text-color);
}

header .header-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--sub-text-color);
  text-decoration: none;
  padding: 4% 0;
}
</style>
