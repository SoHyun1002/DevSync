<template>
  <br>
  <div class = "px-3 py-2 text-sm ml-auto flex items-right">
    <router-link to="/forms">
      <button
        class="px-3 py-2 text-sm ml-auto flex items-right font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        aria-label="Edit" >
        
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
        <div class="px-1 mr-1">작성하기</div>
      </button>
    </router-link>
  </div>
  
  <div class="w-full overflow-hidden rounded-lg shadow">
      <div class="w-full overflow-x-auto">
        <table class="mx-auto w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 w-1/5">Number</th>
              <th class="w-1/3">Title</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Tag</th>
            </tr>
          </thead>
          <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
            v-for="post in posts[currentPage]"
            :key="post"
          >
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 w-1/5 text-center">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div>
                    <p class="px-6 w-1/5 mb-0 text-xs text-gray-600 dark:text-gray-400">
                      {{ post.id }}
                    </p>
                  </div>
                </div>
              </td>
              
              <td class="h-1 w-1/3 text-sm">
                <router-link :to="'/readmore/' + post.id">
                  {{ post.title }}
                </router-link>
              </td>
  
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  {{ post.post_status }}
                </span>
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-pink-100 rounded-full dark:bg-pink-700 dark:text-green-100"
                >
                  #{{ post.tags }}
                </span>
              </td>
            </tr>
            <!-- <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">            
                  <div>
                    <p class="font-semibold">Jolina Angelie</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Unemployed
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">
                $ 369.95
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                >
                  Pending
                </span>
              </td>
              <td class="px-4 py-3 text-sm">
                6/10/2020
              </td>
            </tr> -->
  
          </tbody>
        </table>
        
      </div>
      <div
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
      >
        <!-- <span class="flex items-center col-span-3">
          Showing 21-30 of 100
        </span> -->
        <span class="col-span-2"></span>
        <!-- Pagination -->
        <span class="flex col-span-7 mt-2 sm:mt-right sm:justify-end justify-content: flex-end ">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Previous"
                  @click="prevButton"
                  v-if="currentPage!=0"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <div 
              v-for="x in idxs[parseInt((currentPage) / 5)]"
              :key="x">
                <li>
                  <button
                    class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    :class="{'text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600': currentPage+1==x}"
                    @click="setIndex(x)">
                    {{ x }}
                  </button>
                </li>
              </div>
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Next"
                  @click="nextButton"
                  v-if="currentPage!=posts.length-1"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  </template>
  
  <!--API DATA-->
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  var req_url = 'https://8jm9y8hh40.execute-api.ap-northeast-2.amazonaws.com'
  
  var posts = ref([])
  const error = ref(null);
  
  const PAGE_SIZE = 10
  var currentPage = ref(0)
  
  var idxs = ref([])
  
  const fetchData = async () => {
    try {
      const response = await axios.get(req_url+'/posts');
      
      for (let i=0; i<response.data.length; i+=PAGE_SIZE) {
        posts.value.push(response.data.slice(i, i+PAGE_SIZE))
      }
  
      for (let i=1; i<=posts.value.length; i+=5) {
        var ar = []
        for (let j=i; j<i+5; j+=1) {
          ar.push(j)
          if (j >= posts.value.length) break
        }
        idxs.value.push(ar)
      }
  
      currentPage.value = 0
    } catch (err) {
      error.value = err.message;
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  
  
  function prevButton(){
    if (currentPage.value > 0) {
      currentPage.value -= 1 
    }
    console.log("현재 페이지:", currentPage.value+1)
  }
  function nextButton(){
    if (currentPage.value < posts.value.length-1) {
      currentPage.value += 1
    }
    console.log("현재 페이지:", currentPage.value+1)
  }
  function setIndex(x){
    currentPage.value = x-1
  }
  
  
  </script>
  