<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-full">
          <div class="w-full">
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              회원가입
            </h1>
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">Email</span>
              <input
                class="rounded-md bg-gray-100 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Enter your Email"
                v-model="email"
              />
            </label>
            <label class="block mt-4 text-sm">
              <span class="text-gray-700 dark:text-gray-400">Password</span>
              <input
                class="rounded-md block w-full mt-1 bg-gray-100 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Enter your Password"
                type="password"
                v-model="password"
              />
            </label>
            <!-- <label class="block mt-4 text-sm">
              <span class="text-gray-700 dark:text-gray-400">Confirm Password</span>
              <input
                class="rounded-md block w-full mt-1 bg-gray-100 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Please confirm your Password"
                type="password"
                v-model="confirm_password"
              />
            </label> -->
            <a
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              @click="handleSignUp"
            >
              회원가입
            </a>
            <hr class="my-8" />
            <p class="mt-4">
                <div
                  class="text-sm font-medium text-purple-600 dark:text-purple-400"
                >
                  {{ error_message }}
                </div>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { signUp } from 'aws-amplify/auth';
import { ref } from 'vue';

const email = ref('')
const password = ref('')
// const confirm_password = ref('')

const error_message = ref('')

async function handleSignUp() {
  console.log(email, password)
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email.value,
      password: password.value,
      options: {
        userAttributes: {
          // email,
          // phone_number // E.164 number convention
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log(error.name, error.message);
    
    if (error.name == "EmptySignUpUsername") {
      error_message.value = "이메일을 입력해주세요"
    }
    else if (error.name == "EmptySignUpPassword") {
      error_message.value = "비밀번호를 입력해주세요"
    }
    else if (error.name == "InvalidPasswordException") {
      if (error.message.includes('Password not long enough')) {
        error_message.value = "비밀번호는 8자 이상이여야 합니다."
      } else if (error.message.includes('Password must have lowercase characters')) {
        error_message.value = "비밀번호에 소문자가 포함돼야 합니다."
      } else if (error.message.includes('Password must have uppercase characters')) {
        error_message.value = "비밀번호에 대문자가 포함돼야 합니다."
      } 
      else {
        error_message.value = error
      }
    } 
    else if (error.name == "UsernameExistsException"){
      if (error.message.includes('An account with the given email already exists')) {
        error_message.value = "이미 가입된 이메일입니다."
      }
      else {
        error_message.value = error
      }
    }
    else {
      error_message.value = error
    }
  }
}
</script>