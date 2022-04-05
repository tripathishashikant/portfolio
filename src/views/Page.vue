<template>
  <section class="page">
    <section class="page__header">
      <the-header></the-header>
    </section>
    <main class="page__mainContent">
      <section class="page__banner">
        <the-banner></the-banner>
      </section>
      <section class="page__modules">
        <the-greetings></the-greetings>
      </section>
    </main>
    <section class="page__footer">
      <the-footer></the-footer>
    </section>
  </section>
</template>

<script>
import TheHeader from '../common/components/TheHeader.vue';
import TheFooter from '../common/components/TheFooter.vue';
import TheBanner from '../modules/components/TheBanner.vue';
import TheGreetings from '../modules/components/TheGreetings.vue';

export default {
  name: 'Page',
  components: {
    TheHeader,
    TheFooter,
    TheBanner,
    TheGreetings,
  },
};
</script>
