<script setup lang="ts">
</script>
<template>
  <main class="main">
    <section class="showcase-section">
      <div class="contents">
        <div class="bot-illustration">
          <img class="" src="/public/images/bot-image.svg">
        </div>
        <div class="about-project">
          <h1 class="about-heading">WhatsApp Genie</h1>
          <div class="about-info">
            <p>
              Your personalized WhatsApp chatbot, designed to automate conversations,
              streamline tasks and be your personal companion.
            </p>
            <p>Link your Account to <span>Automate</span> your <span>WhatsApp</span> activities with <span>Ease</span></p>


          <button class="link-account">Start Now</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped lang="scss">
.main {
  @apply w-[90%] md:container mx-auto flex items-center flex-col;

  .showcase-section {
    @apply w-full min-h-dvh flex items-center justify-between;

    .contents {
      @apply w-[100%] h-[100%] flex justify-between items-center flex-col md:flex-row gap-x-7;

      .bot-illustration {
        @apply w-80 sm:w-[25rem] md:w-[40%] md:max-w-[200em] flex justify-center;

        &>img {
          @apply w-80 sm:w-[23rem] min-w-56 md:w-80 md:max-w-[30rem] lg:w-[26rem];
        }
      }

      .about-project {
        @apply flex flex-col gap-y-4 text-center md:text-left justify-center md:justify-start w-full text-gray-800 dark:text-white;

        .about-heading {
          @apply text-2xl md:text-3xl font-semibold;
        }

        .about-info {
          @apply text-sm;

          span {
            @apply p-1 px-2 rounded-2xl dark:bg-green-400 bg-gray-700 text-lime-300 dark:text-gray-800 leading-9;
          }

          .link-account {
            @apply mt-3 backdrop-blur p-3 px-4 border border-gray-500/50 dark:border-green-300/50 rounded-md;
          }
        }
      }
    }

  }
}
</style>
