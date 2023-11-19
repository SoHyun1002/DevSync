<template>
    <br>
    <div
        class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
        <label class="block text-sm">
        <input
            class="bg-gray-50 rounded-md block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="제목"
            v-model="title"
        />
        </label>
        <label class="block mt-4 text-sm">
        <div class = "grid grid-cols-2 gap-4">
            <textarea
                class="grid-item block bg-gray-50 rounded-md w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray "
                rows="23"
                cols="30"
                placeholder="코드를 입력해주세요."
                v-model="content"
                style="resize: none;"
            ></textarea>
            
            <div class = "block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 bg-white rounded-md border-solid border-2">
                <div class="grid-item markdown-body">
                    <Markdown :source="content" :highlight="highlight" />
                </div>
            </div>
        </div>
    </label>
    </div>
    <div class="flex justify-center">
    <button
        class="px-3 py-2 text-sm flex items-center justify-center font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        aria-label="Edit"
        @click="upload()"
    >
        <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        >
        <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        ></path>
        </svg>
        <div class="px-1 mr-1">작성</div>
    </button>
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
import { onMounted, ref } from 'vue';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css'

import axios from 'axios';
var req_url = 'https://8jm9y8hh40.execute-api.ap-northeast-2.amazonaws.com'

import { useRouter } from 'vue-router';
const router = useRouter();  

const title = ref("")
const content = ref("")



function upload(){
    const response = axios.post(req_url+'/posts', null, { 
        params: { 
            title: title.value, 
            content: content.value
        } 
    })
    .then(response => {
        router.push("/readmore/"+response.data.id)
    })
    .catch(error => {
        console.log(error.message)
    });
}

</script>


<!--github-markdown.css-->