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
import { onMounted, onBeforeUnmount } from 'vue';
import TheNavigation from '@/components/common/TheNavigation.vue';
import { useThemeSwitcherStore } from '@store/themeSwitcher';
import THEME_SWITCHER from "@/constants/themeSwitcher";


const { setTheme } = useThemeSwitcherStore();

const handleColorModeChange = () => {
  const storedTheme = localStorage.getItem(THEME_SWITCHER.THEME);
  if (storedTheme !== 'light' && storedTheme !== 'dark') {
    setTheme();
  }
}

onMounted(() => {
  setTheme();

  window.matchMedia(THEME_SWITCHER.MEDIA_QUERY_DARK).addEventListener('change', handleColorModeChange)
});

onBeforeUnmount(() => {
  window.matchMedia(THEME_SWITCHER.MEDIA_QUERY_DARK).removeEventListener('change', handleColorModeChange);
});
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
