<script setup lang="ts">
import { computed, ref } from "vue";
import countryCodes from "../../public/country-code.json";
import { toast } from "vue3-toastify";

let selectedCountry = ref(countryCodes[0])
const phoneNumber = ref('')

const placeholderText = computed(() => `Enter ${selectedCountry.value.digits} digit number`)

const formattedPhoneNumber = computed(() => {
  const digits = phoneNumber.value.replace(/\D/g, '')
  let format = selectedCountry.value.code + ' '
  for (let i = 0; i < digits.length; i++) {
    if (i === 3 || i === 6) {
      format += '-'
    }
    format += digits[i]
  }
  return format
})

const isValidPhoneNumber = computed(() => {
  const digits = phoneNumber.value.replace(/\D/g, '')
  return digits.length === selectedCountry.value.digits
})

const handlePhoneNumberInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '')
  phoneNumber.value = digits.slice(0, selectedCountry.value.digits)
}


const generateOTP = () => {
  toast("This is a success notification!", {
    type: "success",
  });
};
</script>
<template>
  <main class="main">
    <section class="main-section">
      <div class="contents">
        <div class="get-started-section">
          <h1 class="get-started-heading">4 Steps to get started</h1>
          <div class="getting-started">
            <div class="getting-started-steps">
              <div class="getting-started-steps-number">1</div>
              <div class="steps-contents">
                <h4 class="steps-contents-heading">Input your phone number</h4>
                <p class="steps-contents-description">Type in your WhatsApp registered phone number in the Input Form
                  available.
                </p>
              </div>
            </div>
            <div class="getting-started-steps">
              <div class="getting-started-steps-number">2</div>
              <div class="steps-contents">
                <h4 class="steps-contents-heading">Generate and Recieve an OTP</h4>
                <p class="steps-contents-description">Click on the Generate OTP button to generate an OTP for your phone
                  number.
                </p>
              </div>
            </div>
            <div class="getting-started-steps">
              <div class="getting-started-steps-number">3</div>
              <div class="steps-contents">
                <h4 class="steps-contents-heading">Copy the generated OTP</h4>
                <p class="steps-contents-description">Copy the generated OTP, open your WhatsApp, to link account and
                  Link with phone number instead and paste your 8-digit OTP.
                </p>
              </div>
            </div>
            <div class="getting-started-steps">
              <div class="getting-started-steps-number">4</div>
              <div class="steps-contents">
                <h4 class="steps-contents-heading">You're Set to go</h4>
                <p class="steps-contents-description">Let the OTP get Verified and..., there you have it, you're good to
                  go!!!.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="link-account-section">
          <h4 class="link-account-heading">Link Your Account</h4>
          <form action="" class="link-phone-number-form" @submit.prevent="generateOTP">
            <div class="select-country-field">
              <label class="select-country-label" for="country-code-select">
                Choose your Country:
              </label>
              <select v-model="selectedCountry" class="country-code-select" id="country-code-select">
                <option v-for="country in countryCodes" :key="country.code" :value="country">
                  {{ country.name }} ({{ country.code }})
                </option>
              </select>
            </div>
            <div class="phone-number-field">
              <label for="phone-number" class="phone-number-label">Enter Phone Number</label>
              <div class="phone-number-input-wrapper">
                <span class="phone-number-country-code">{{ selectedCountry.code }}</span>
                <input id="phone-number" type="tel" v-model="phoneNumber" @input="handlePhoneNumberInput"
                  class="phone-number-input" :class="{ 'invalid': phoneNumber && !isValidPhoneNumber }"
                  :placeholder="placeholderText" />
              </div>
              <p v-if="phoneNumber && !isValidPhoneNumber" class="error-message">
                Please enter a valid {{ selectedCountry.digits }}-digit phone number
              </p>
            </div>
            <button @click.stop.prevent="generateOTP" type="submit" class="submit-button"
              :disabled="!isValidPhoneNumber">
              Generate OTP
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss">
.main {
  @apply w-[90%] md:container mx-auto flex items-center flex-col;

  .main-section {
    @apply w-full min-h-dvh flex items-center justify-between font-montserrat text-gray-800 dark:text-white;

    .contents {
      @apply w-[100%] h-[100%] flex justify-between items-center flex-col md:flex-row gap-x-7 gap-y-8;

      .get-started-section {
        @apply w-96 sm:w-[30rem] md:w-[48%] md:max-w-[250rem] flex flex-col;

        .get-started-heading {
          @apply text-2xl md:text-3xl font-semibold mb-4;
        }

        .getting-started {
          @apply border-l-2 border-l-green-500 pl-3 md:pl-5 py-3 md:py-5 flex flex-col gap-y-5;

          &-steps {
            @apply min-h-fit w-full flex gap-x-3;

            &-number {
              @apply min-w-[2rem] h-[2rem] rounded-full bg-green-500 grid place-items-center font-bold;
            }

            .steps-contents {
              @apply flex flex-col gap-y-1;

              &-heading {
                @apply text-base md:text-lg font-semibold;
              }

              &-description {
                @apply text-sm md:text-base;
              }
            }
          }
        }
      }

      .link-account-section {
        @apply w-96 sm:w-[30rem] md:w-[48%] md:max-w-[250rem] md:self-start flex flex-col;

        .link-account-heading {
          @apply text-2xl md:text-3xl font-semibold mb-4;
        }

        .link-phone-number-form {
          @apply w-[22rem] max-w-[22rem] sm:w-full sm:max-w-full md:w-96 md:max-w-96;

          .select-country-field {
            @apply mb-4;

            .select-country-label {
              @apply block text-sm font-medium mb-1;
            }

            .country-code-select {
              @apply w-full text-gray-800 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500;
            }
          }

          .phone-number-field {
            @apply mb-4;

            .phone-number-label {
              @apply block text-sm font-medium mb-1;
            }

            .phone-number-input-wrapper {
              @apply flex w-full text-gray-800 text-sm md:text-base;

              .phone-number-country-code {
                @apply p-3 bg-white rounded-l-md;
              }

              .phone-number-input {
                @apply w-full py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500;

                &.invalid {
                  @apply border-red-500 focus:ring-red-500;
                }
              }
            }

            .error-message {
              @apply text-red-500 text-sm mt-1;
            }
          }

          .submit-button {
            @apply w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
          }
        }
      }
    }
  }
}
</style>
