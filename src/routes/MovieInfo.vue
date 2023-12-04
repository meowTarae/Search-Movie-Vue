<script setup lang="ts">
import { onMounted } from "vue";
import { useMovieStore } from "~/store/MovieStore";
import router from "~/routes";

const movieStore = useMovieStore();

async function getInfo() {
  if (typeof router.currentRoute.value.params.imdbID !== "string") return;
  const imdbID: string = router.currentRoute.value.params.imdbID;
  await movieStore.fetchMovieInfo(imdbID);
}

onMounted(() => getInfo());
</script>

<template>
  <article v-if="!movieStore.isLoading">
    <router-link :to="{ name: 'search-page' }">
      <div class="modal">
        <div class="background" @click.prevent>
          <div class="container">
            <img
              :src="movieStore.movieInfo.Poster"
              :alt="movieStore.movieInfo.Title"
            />
            <div class="info">
              <h2>{{ movieStore.movieInfo.Title }}</h2>
              <h3>( {{ movieStore.movieInfo.Released }} )</h3>
              <p>{{ movieStore.movieInfo.Plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style scoped lang="scss">
.background {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}
.info {
  text-decoration: none;
  color: var(--sub-text-color);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 80%;
  height: 100%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;

  text-align: center;
  & .info img {
    margin-top: 40%;
  }
  & .info h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 4%;
  }
  & .info h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2% 0;
  }
  & .info p {
    line-height: 160%;
  }
}
</style>
