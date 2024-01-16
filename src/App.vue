<template>
<div class="app">
  <header class="app__header header">
    <TheNavigation></TheNavigation>
  </header>
  <main id="mainContent" class="app__views">
    <router-view></router-view>
  </main>
</div>
</template>

<script setup>
import TheNavigation from './components/common/TheNavigation.vue';
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
