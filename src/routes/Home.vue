<template>
  <router-link class="gotoSearch" :to="{ name: 'search-page' }"
    >Go to Search</router-link
  >
</template>

<style scoped lang="scss">
.gotoSearch {
  font-size: 3rem;
  color: var(--main-text-color);
  text-decoration: none;
}
</style>
