<template>
   <div class="px-4 py-4 my-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300">
        <div class="flex justify-between flex-1">
            <div class="px-6 py-4">
                <p class="text-4xl">{{ post.title }}</p>
            </div>
            <div class="w- px-4 flex items-center flex-shrink-0 space-x-6">
                <p class="text-md text-gray-400 px-2">
                    {{ post.user_id }}
                </p>
                <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://cdn.pixabay.com/photo/2016/10/26/22/00/hamster-1772742_1280.jpg"
                    alt=""
                    aria-hidden="true"
                />
            </div>
        </div>
        <p class="px-8">{{ post.created_date }}</p>
        <hr class="mt-4 mb-2 dark:border-gray-400">

        <!--수정, 삭제 아이콘-->
        <div class="flex justify-end items-end space-x-2 text-sm mr-4">
            <button
            class="flex items-right justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit"
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
            </button>
            <button
            class="flex items-right justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray ml-auto mr-4"
            aria-label="Delete"
            >
            <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
                ></path>
            </svg>
            </button>
        </div>
        <div class="px-6">
            <div class="markdown-body"> 
                <Markdown :source="post.content" :highlight="highlight" />
            </div>
        </div>
        <div class="flex justify-center py-6">
            <button
                class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
                <HeartIcon class="w-4 h-4 mr-2 -ml-1"/>
                <span>0</span>
            </button>
        </div>
    </div>   
    <hr class="dark:border-gray-400">
    <div class="px-4 py-4 my-8 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300">
        <div class="flex items-center px-8 py-4">
            <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
            />
            <p class=" px-3 text-lg text-gray-700 dark:text-gray-300">
                작성자
            </p>
        </div>
        <hr class="my-2 mx-3 dark:border-gray-400">
        <div class="px-6 py-4">
            <textarea
                class="shadow-lg block bg-gray-50 rounded-md w-full text-gray-700 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="5"
                cols="3"
                placeholder="자신의 의견을 적어보세요."
                style="resize: none;"
            />
            <div class="flex-grow flex items-center justify-end px-2 py-2">
                <button
                    class="my-2 px-2 py-2 text-sm font-medium leading-4 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple self-start"
                    aria-label="Edit"
                >
                    <p class="px-2">등록</p>
                </button>
            </div>
        </div>
        
        <!-- 댓글창 댓글 n 좋아요 n
        각 사용자 댓글 마다 구분선 달기 맨마지막이라면 구분선 없음
        사용자 프로필 / 이름 / 작성일자
        수정 삭제 뜨게하기(글쓴이라면 / 댓글쓴사람이라면) -->
        
        <!--댓글창-->
        <!-- <div class="flex items-center px-3">
            <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
            />
            <p class="text-sm text-gray-700 px-3 ">
                작성자
            </p>
        </div>
        <div class="grid grid-cols-7 gap-4 py-3 px-3 text-sm text-gray-400 items-end">
        <textarea
            class="col-span-4 shadow-lg block bg-gray-50 rounded-md w-full mt-1 text-gray-700 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            rows="5"
            cols="3"
            placeholder="자신의 의견을 적어보세요."
            style="resize: none;"
        ></textarea>
        <button
            class="px-1 py-1 text-xs flex items-center justify-center font-medium leading-4 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple self-start"
            aria-label="Edit"
        >
            <div class="px-1 py-1">등록</div>
        </button>
        </div> -->
    </div>    
</template>
<style scoped>
.markdown-body {
    all: unset;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { HeartIcon } from '@/icons'

import Markdown from 'vue3-markdown-it';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css'

import axios from 'axios';

var req_url = 'https://8jm9y8hh40.execute-api.ap-northeast-2.amazonaws.com'

var post = ref([])
const error = ref(null);

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();  
const router = useRouter();

const fetchData = async () => {
    try {
        const response = await axios.get(req_url+'/posts', {params:{post_id: route.params.id}});
        post.value = response.data 
        // console.log()
        {
            var start = new Date(post.value.created_date);
            var end = new Date();
            
            var diff = (end - start) / 1000;
  
            var times = [
                { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
                { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
                { name: '일', milliSeconds: 60 * 60 * 24 },
                { name: '시간', milliSeconds: 60 * 60 },
                { name: '분', milliSeconds: 60 },
            ];

            for (var value of times) {
                var betweenTime = Math.floor(diff / value.milliSeconds);

                if (betweenTime > 0) {
                    console.log(betweenTime, value.name)
                    post.value.created_date = betweenTime + value.name + ' 전';
                    return
                }
            }
            post.value.created_date = '방금 전';
        }
    } catch (err) {
        error.value = err.message;
        router.push("/404")
    }
};

onMounted(() => {
    fetchData();
});
</script>