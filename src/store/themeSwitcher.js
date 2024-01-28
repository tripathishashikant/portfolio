import { ref } from 'vue';
import { defineStore } from 'pinia';
import THEME_SWITCHER from "@/constants/themeSwitcher";

export const useThemeSwitcherStore = defineStore('themeSwitcher', () => {
  // state
  const currentTheme = ref(null);

  // actions
  function setTheme() {
    const theme = localStorage.getItem(THEME_SWITCHER.THEME);

    if(theme) {
      currentTheme.value = theme;
    }
    else {
      currentTheme.value = window.matchMedia(THEME_SWITCHER.MEDIA_QUERY_DARK).matches ? 'dark' : 'light';
    }
    
    localStorage.setItem(THEME_SWITCHER.THEME, currentTheme.value);
    document.documentElement.setAttribute('data-bs-theme', currentTheme.value);
  }

  return { 
    currentTheme,
    setTheme,
  };
});
