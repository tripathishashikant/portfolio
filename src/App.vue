<template>
  <section class="app">
    <the-page></the-page>
  </section>
</template>

<script>
import ThePage from './views/Page.vue';

export default {
  name: 'app',
  components: {
    ThePage,
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>
