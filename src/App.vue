<template>
  <section class="app">
    <section class="app__container">
      <section class="app__wrapper">
        <section class="app__section app__section--green">
          <the-banner></the-banner>
        </section>
        <section class="app__section app__section--purple">
          <the-greetings></the-greetings>
        </section>
        <section class="app__section app__section--blue">
          <the-portfolio></the-portfolio>
        </section>
        <section class="app__section app__section--yellow">
          <exp-and-edu></exp-and-edu>
        </section>
        <section class="app__section app__section--maroon">
          <the-skills></the-skills>
        </section>
      </section>
    </section>
    <section class="app__dots"></section>
    <div class="app__toolTips">
      <div class="app__toolTip">Banner</div>
      <div class="app__toolTip">Greetings</div>
      <div class="app__toolTip">Portfolio</div>
      <div class="app__toolTip">Experience and Education</div>
      <div class="app__toolTip">Skills</div>
    </div>
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

gsap.registerPlugin(ScrollTrigger, Draggable);

export default {
  name: 'app',
  components: {
    TheBanner,
    TheGreetings,
    ThePortfolio,
    ExpAndEdu,
    TheSkills,
  },
  mounted() {
    /* ---------- starts: variables declaration ---------- */
    const slides = document.querySelectorAll('.app__section');
    const container = document.querySelector('.app__wrapper');
    const navDots = [];
    const dots = document.querySelector('.app__dots');
    const dotAnim = gsap.timeline({ paused: true });
    const toolTips = document.querySelectorAll('.app__toolTip');
    const toolTipAnims = [];

    let offsets = [];
    const dur = 0.6;
    let oldSlide = 0;
    let activeSlide = 0;
    let ih = window.innerHeight;
    /* ---------- ends: variables declaration ---------- */

    /* ---------- starts: tool tip hover ---------- */
    function dotHover() {
      if (toolTipAnims[this.index].reversed()) toolTipAnims[this.index].play();
      else toolTipAnims[this.index].reverse();
    }
    /* ---------- starts: tool tip hover ---------- */

    /* ---------- starts: resize sections ---------- */
    function newSize() {
      offsets = [];
      ih = window.innerHeight;
      gsap.set('.app__wrapper', { height: slides.length * ih });
      gsap.set(slides, { height: ih });
      for (let i = 0; i < slides.length; i += 1) {
        offsets.push(-slides[i].offsetTop);
      }
      gsap.set(container, { y: offsets[activeSlide] });
    }
    /* ---------- ends: resize sections ---------- */

    /* ---------- starts: nav dots animation ---------- */
    dotAnim.to('.app__dot', {
      stagger: { each: 1, yoyo: true, repeat: 1 },
      scale: 2.1,
      rotation: 0.1,
      ease: 'none',
      duration: 0.5,
    });
    dotAnim.time(1);
    /* ---------- end: nav dots animation ---------- */

    /* ---------- starts: tween dots animation ---------- */
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, 'y') / ih) + 1,
      });
    }
    /* ---------- ends: tween dots animation ---------- */

    /* ---------- starts: slide section animation ---------- */
    function slideAnim(e) {
      oldSlide = activeSlide;

      if (gsap.isTweening(container)) {
        return;
      }

      // dot click
      if (this.className === 'app__dot') {
        activeSlide = this.index;
        // scrollwheel
      } else {
        activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
      }

      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;

      if (oldSlide === activeSlide) {
        return;
      }

      // tween the slide
      gsap.to(container, {
        y: offsets[activeSlide],
        ease: 'power2.inOut',
        onUpdate: tweenDot,
        duration: dur,
      });
    }
    /* ---------- ends: slide section animation ---------- */

    /* ---------- starts: dots and tooltip creation ---------- */
    for (let i = 0; i < slides.length; i += 1) {
      const tl = gsap.timeline({ paused: true, reversed: true });
      const newDot = document.createElement('section');
      newDot.className = 'app__dot';
      newDot.index = i;
      navDots.push(newDot);
      newDot.addEventListener('click', slideAnim);
      newDot.addEventListener('mouseenter', dotHover);
      newDot.addEventListener('mouseleave', dotHover);
      dots.appendChild(newDot);
      offsets.push(-slides[i].offsetTop);
      tl.to(toolTips[i], { opacity: 1, ease: 'none', duration: 0.25 });
      toolTipAnims.push(tl);
    }
    /* ---------- ends: dots and tooltip creation ---------- */

    window.addEventListener('wheel', slideAnim);
    window.addEventListener('resize', newSize);
    newSize();
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';

.app {
  &__container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
  }

  &__section {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--green {
      background-color: green;
    }

    &--purple {
      background-color: purple;
    }

    &--maroon {
      background-color: maroon;
    }

    &--yellow {
      background-color: yellow;
    }

    &--blue {
      background-color: blue;
    }
  }

  &__dots {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    z-index: 1;
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    position: relative;
    background-color: #000;
    margin: 1.2rem;
    cursor: pointer;
  }

  &__toolTips {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    z-index: 1000;
  }

  &__toolTip {
    opacity: 0;
    text-align: right;
    height: 12px;
    margin: 12px 0;
    line-height: 12px;
    left: 10px;
    top: 10px;
  }

  @media (hover: none) {
    .app__toolTips {
      visibility: hidden;
    }
  }
}
</style>
