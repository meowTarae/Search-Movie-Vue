<script setup lang="ts">
import Header from "~/components/Header.vue";
import Loading from "~/components/LoadingPage.vue";
</script>

<template>
  <main>
    <Header class="header" />
    <RouterView class="section" />
  </main>
  <Loading />
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  height: 16vh;
  background-color: var(--main-header-color);

  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  width: 80%;
  height: 84vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
