<template>
  <section class="app__container">
    <the-banner></the-banner>
    <the-greetings></the-greetings>
    <the-portfolio></the-portfolio>
    <exp-and-edu></exp-and-edu>
    <the-skills></the-skills>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

import TheBanner from './modules/components/TheBanner.vue';
import TheGreetings from './modules/components/TheGreetings.vue';
import ThePortfolio from './modules/components/ThePortfolio.vue';
import ExpAndEdu from './modules/components/ExperienceAndEducation.vue';
import TheSkills from './modules/components/TheSkills.vue';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

export default {
  name: 'app',
  components: {
    TheBanner,
    TheGreetings,
    ThePortfolio,
    ExpAndEdu,
    TheSkills,
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';

.app {
  position: absolute;
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
