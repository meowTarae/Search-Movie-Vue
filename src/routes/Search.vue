<script setup lang="ts">
import SearchBar from "~/components/SearchMovie/SearchBar.vue";
import SearchedList from "~/components/SearchMovie/SearchedList.vue";
</script>
<template>
  <SearchBar class="search-bar" />
  <SearchedList />
  <RouterView />
</template>

<style scoped lang="scss">
.search-bar {
  width: 48rem;
  height: 8vh;
  min-width: 48rem;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
