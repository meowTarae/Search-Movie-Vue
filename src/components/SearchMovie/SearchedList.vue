<script setup lang="ts">
import { useMovieStore } from "../../store/MovieStore";
const movieStore = useMovieStore();

const nextPage = () => {
  movieStore.fetchNextMovieList();
};
</script>

<template>
  <ul class="movieList">
    <li v-for="movie in movieStore.filteredMovies" :key="movie.imdbID">
      <router-link
        class="movieList__cards"
        :to="{
          name: 'movie-info',
          params: { title: movie.Title, imdbID: movie.imdbID },
        }"
      >
        <div class="movieList__cards__container">
          <img :src="movie.Poster" alt="movie.Title" />
          <div class="movieList__cards__container__text-background">
            <p>{{ movie.Title }}</p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
  <button
    v-if="movieStore.movies.length"
    class="movieList__nextPage"
    @click="nextPage"
  >
    More
  </button>
</template>

<style scoped lang="scss">
@media (min-width: 1400px) {
  .movieList {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 900px) and (max-width: 1399px) {
  .movieList {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 400px) and (max-width: 899px) {
  .movieList {
    grid-template-columns: repeat(2, 1fr);
  }
}

.movieList {
  margin-top: 4%;
  display: grid;
  gap: 1rem;
  text-decoration: none;
}
.movieList__cards__container {
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    filter: brightness(60%);
  }

  & .movieList__cards__container__text-background {
    width: 100%;
    position: absolute;
    bottom: 0%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.5s;

    & p {
      padding: 6%;
      color: var(--sub-text-color);
      line-height: 140%;
    }
  }
}

.movieList__cards__container:hover {
  & img {
    filter: brightness(100%);
    transition: filter 0.5s;
  }
  & .movieList__cards__container__text-background {
    opacity: 1;
  }
}

.movieList__nextPage {
  border: none;
  font-size: 3rem;
  font-weight: 600;
  color: var(--main-text-color);
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: inherit;
  margin-top: 4%;
}
</style>
