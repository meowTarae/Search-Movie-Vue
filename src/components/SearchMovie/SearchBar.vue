<script setup lang="ts">
import TheIcon from "../TheIcon.vue";
import { ref } from "vue";
import { useMovieStore } from "../../store/MovieStore";

const title = ref("");
const movieStore = useMovieStore();

const searchMovies = () => {
  if (!title.value.trim()) {
    return alert("영화 제목을 입력 해주세요.");
  }
  movieStore.fetchMovieList(title.value);
};
const resetMovies = () => {
  title.value = "";
  movieStore.$reset();
};
</script>

<template>
  <div>
    <input
      v-model="title"
      type="text"
      placeholder="영화 제목을 입력 해주세요."
      @keydown.enter="searchMovies"
    />
    <TheIcon
      class="search-bar_icon search-bar_icon-search"
      @click="searchMovies"
      >search</TheIcon
    >
    <TheIcon class="search-bar_icon search-bar_icon-delete" @click="resetMovies"
      >delete</TheIcon
    >
  </div>
</template>

<style scoped lang="scss">
div {
  position: relative;
}

input {
  width: 60%;
  height: 50px;

  padding: 0 16px;
  background: none;
  color: var(--main-text-color);
  font-size: 1.5rem;
  font-weight: 600;

  outline: none;
  border: none;
  border-bottom: 3px solid var(--main-text-color);
  text-align: center;
}
.search-bar_icon {
  position: absolute;
}
.search-bar_icon-search {
  right: 64px;
}
.search-bar_icon-delete {
  right: 16px;
}
</style>
