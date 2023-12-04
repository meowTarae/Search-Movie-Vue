import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Search from "./Search.vue";
import MovieInfo from "./MovieInfo.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: Home,
    },
    {
      path: "/search",
      name: "search-page",
      component: Search,
      children: [
        {
          path: "/search/:title/:imdbID",
          name: "movie-info",
          component: MovieInfo,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
