<template>
  <section class="page">
    <the-header></the-header>
    <the-banner></the-banner>
    <the-greetings></the-greetings>
    <the-footer></the-footer>
  </section>
</template>

<script>
// import { gsap } from 'gsap';

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
