<script setup lang="ts">
import { useMovieStore } from "~/store/MovieStore";
const movieStore = useMovieStore();
</script>

<template>
  <section v-if="movieStore.isLoading" class="modal">
    <div class="background">
      <img
        class="loading__img"
        src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.background {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
