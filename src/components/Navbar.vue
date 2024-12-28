<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";

const dark = useLocalStorage("dark", false);

const toggleTheme = () => {
  dark.value = !dark.value;
  document.body.classList.toggle("dark");
};

const showMobileNav = ref(false);

const toggleNav = () => {
  showMobileNav.value = !showMobileNav.value;
};
</script>
<template>
  <nav class="nav">
    <div class="nav-container">
      <header class="nav-header">
        <h3>WhatsAppGenie</h3>
      </header>
      <div class="mobile-navigator">
        <button class="theme-switch-button" @click="toggleTheme">
          <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>
        <button class="hamburger" @click="toggleNav">
          <svg v-if="showMobileNav" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <ul class="nav-list">
        <li>
          <button class="theme-switch-button" @click="toggleTheme">
            <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
        </li>
        <li class="nav-list-item">About</li>
        <li class="nav-list-item">Authenticate</li>
      </ul>
    </div>
  </nav>

  <ul v-show="showMobileNav" class="mobile-nav-list">
    <li class="mobile-nav-list-item">About</li>
    <li class="mobile-nav-list-item">Authenticate</li>
  </ul>
</template>
<style scoped lang="scss">
.nav {
  @apply w-full backdrop-blur-sm bg-white/10 sticky top-0 py-3 border-b border-b-gray-300 dark:border-b-gray-300/10 text-gray-800 text-sm dark:text-white;

  .nav-container {
    @apply w-[90%] sm:container mx-auto flex flex-row justify-between items-center;

    .nav-header {
      @apply text-[#25d366] font-semibold text-lg md:text-xl font-ubuntu;
    }

    .mobile-navigator {
      @apply flex items-center gap-x-2 md:hidden;
    }

    .nav-list {
      @apply hidden md:flex flex-col md:flex-row items-center gap-x-5;

      .nav-list-item {
        @apply text-sm font-ubuntu;
      }
    }

    .theme-switch-button {
      @apply w-5 h-5 active:animate-spin duration-1000;
    }
  }
}

.mobile-nav-list {
  @apply left-10 right-10 sm:left-32 sm:right-32 fixed top-14 h-32 flex justify-center items-center flex-col;
  @apply bg-white/10 backdrop-blur-sm z-20 border border-gray-300 dark:border-gray-300/10 shadow-md md:hidden dark:text-white text-sm gap-y-3;
}
</style>
