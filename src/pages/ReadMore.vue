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
            <EditIcon class="w-5 h-5"/>
        </button>
        <button
        class="flex items-right justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray ml-auto mr-4"
        aria-label="Delete"
        @click="isModalOpen = true"
        >
            <TrashIcon class="w-5 h-5"/>
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
<div 
    class="px-4 py-4 my-8 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300"
    v-for="comment in post.comments"
>
    <div class="flex items-center px-8 py-4">
        <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            aria-hidden="true"
        />
        <p class=" px-3 text-lg text-gray-700 dark:text-gray-300">
            {{ comment.user_name }}
        </p>
    </div>
    <hr class="my-2 mx-3 dark:border-gray-400">
    <div class="px-6 py-4">
        <div class="px-6">
                <div class="markdown-body"> 
                    <Markdown :source="comment.body" :highlight="highlight" />
                </div>
            </div>
    </div>
</div>    
<div class="px-4 py-4 my-8 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300">
    <!-- <div class="flex items-center px-8 py-4">
        <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            aria-hidden="true"
        />
        <p class=" px-3 text-lg text-gray-700 dark:text-gray-300">
            작성자
        </p>
    </div> -->
    <!-- <hr class="my-2 mx-3 dark:border-gray-400"> -->
    <div class="px-6 py-4">
        <textarea
            class="my-4 shadow-lg block bg-gray-50 rounded-md w-full text-gray-700 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
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
</div>      
    <!-- 
        댓글창 댓글 n 좋아요 n
        각 사용자 댓글 마다 구분선 달기 맨마지막이라면 구분선 없음
        사용자 프로필 / 이름 / 작성일자
        수정 삭제 뜨게하기(글쓴이라면 / 댓글쓴사람이라면) 
    -->
<!-- Modal backdrop. This what you want to place close to the closing body tag -->
    <div
        v-show="isModalOpen"
        class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    >
      <!-- Modal -->
      <Transition
        v-show="isModalOpen"
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0 transform translate-y-1/2"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0  transform translate-y-1/2"
        @click.away="isModalOpen = false"
        @keydown.escape="isModalOpen = false"
        class="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
        role="dialog"
        id="modal"
      >
        <div>
        <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
            <header class="flex justify-between">
            <!-- Modal title -->
            <p
                class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
                게시물 삭제
            </p>
            <button
                class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                aria-label="close"
                @click="closeModal"
            >
                <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                role="img"
                aria-hidden="true"
                >
                <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                ></path>
                </svg>
            </button>
            </header>
            <!-- Modal body -->
            <div class="mt-4 mb-6">
            
            <!-- Modal description -->
            <p class="text-sm text-gray-700 dark:text-gray-400">
                정말 게시물을 삭제하시겠습니까?
            </p>
            </div>
            <footer
            class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800"
            >
            <button
                @click="closeModal"
                class="w-full px-5 py-3 text-sm font-medium leading-5 text-gray-700 dark:text-gray-400 transition-colors duration-150 border border-gray-300 rounded-lg  sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
            >
                Cancel
            </button>
            <button
                class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                @click="DeleteItem"
            >
                Accept
            </button>
            </footer>
        </div>
      </Transition>
    </div>
    <!-- End of modal backdrop -->
</template>
<style scoped>
.markdown-body {
    all: unset;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { HeartIcon, EditIcon, TrashIcon } from '@/icons'

const isModalOpen = ref(false)

import Markdown from 'vue3-markdown-it';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css'

import axios from 'axios';

var req_url = 'https://8jm9y8hh40.execute-api.ap-northeast-2.amazonaws.com'

var post = ref([])

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();  
const router = useRouter(); 

const fetchData = async () => {
    try {
        const response = await axios.get(req_url+'/posts', {params:{post_id: route.params.id}});
        post.value = response.data 
        // console.log(post.value)
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
                    post.value.created_date = betweenTime + value.name + ' 전';
                    return
                }
            }
            post.value.created_date = '방금 전';
        }
    } catch (err) {
        console.error(err)
        // router.push("/404")
    }
};

onMounted(() => {
    fetchData();
});

function DeleteItem() {
    try {
        axios.delete(req_url+'/posts', {params:{post_id: route.params.id}});
        router.push("/codereviews")
    } catch (err) {
        console.error(err)
    }
}
// import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
</script>