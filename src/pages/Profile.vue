<template>
<div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        프로필 정보
    </h2>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Nickname</span>
        <input 
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" 
            placeholder=""
            :value="nickname"
        >
        </label>
    </div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { fetchUserAttributes } from 'aws-amplify/auth';

const nickname = ref('')

onMounted(() => {
    handleFetchUserAttributes()
});

async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    nickname.value = userAttributes.nickname
  } catch (error) {
    console.log(error);
  }
}
</script>