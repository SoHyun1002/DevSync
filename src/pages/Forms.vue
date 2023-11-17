<template>
    <br>
    <div
        class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
        <label class="block text-sm">
        <input
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input rounded-md"
            placeholder="제목"
        />
        </label>
        <label class="block mt-4 text-sm">
        <div class = "grid grid-cols-2 gap-4">
            <textarea
                class="grid-item block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray rounded-md "
                rows="23"
                cols="30"
                placeholder="코드를 입력해주세요."
                v-model="source"
                style="resize: none;"
            ></textarea>
            
            <div class = "block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 bg-white rounded-md border-solid border-2">
                <div class="grid-item markdown-body">
                    <Markdown :source="source" />
                </div>
            </div>
        </div>
    </label>
    </div>
    </template>
<style scoped>
 @import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css');
.markdown-body {
    all: unset;
}
</style>

<script setup>
import Markdown from 'vue3-markdown-it';
import { ref } from 'vue';

const source = ref("")
</script>
