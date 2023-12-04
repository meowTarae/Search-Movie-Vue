import { defineStore } from "pinia";
import { IResponseMovie, Movies, IMovieInfo } from "../Types/MovieTypes";
import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [] as Movies,
    page: 1 as number,
    title: "" as string,
    movieInfo: {} as IMovieInfo,
    isLoading: false as boolean,
  }),
  getters: {
    filteredMovies(state) {
      return state.movies.sort((a, b) => +b.Year - +a.Year);
    },
  },
  actions: {
    async fetchMovieList(title: string) {
      this.title = title;
      this.isLoading = true;
      try {
        const responseValue: IResponseMovie = await (
          await axios.get("/api/movieList", {
            params: { title: this.title, page: 1 },
          })
        ).data;
        if (responseValue.Search) {
          this.movies = responseValue.Search;
        }
        // 검색 결과가 없을 때
        else {
          alert("검색 결과가 없습니다.");
          return;
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          throw new Error("Axios Error");
        }
      } finally {
        this.isLoading = false;
      }
    },
    async fetchNextMovieList() {
      this.page += 1;

      try {
        const responseValue: IResponseMovie = await (
          await axios.get("/api/movieList", {
            params: { title: this.title, page: this.page },
          })
        ).data;
        this.movies = [...this.movies, ...responseValue.Search];
      } catch (e) {
        if (axios.isAxiosError(e)) {
          throw new Error("Axios Error");
        }
      }
    },
    async fetchMovieInfo(imdbID: string) {
      this.isLoading = true;
      try {
        const responseValue: IMovieInfo = await (
          await axios.get("/api/movieInfo", {
            params: { imdbID },
          })
        ).data;
        if (responseValue) {
          this.movieInfo = responseValue;
        } else {
          alert("잘못된 경로 접근입니다.");
          return;
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          throw new Error("Axios Error");
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
});
