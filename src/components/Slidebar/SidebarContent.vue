<script setup>
import SlidebarSubmenu from '@components/Slidebar/SlidebarSubmenu.vue'
import routes from '@/routes/sidebar'
import * as Icons from '@/icons'
import { useRouter } from 'vue-router'

function isActive(path) {
    const curRoute = useRouter().currentRoute.value.path
    return curRoute === path;
}

</script>
<template>
    <div className="py-4 text-gray-500 dark:text-gray-400">
        <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
            DevSync
        </a>
        <ul class="mt-6">
            <template v-for="route in routes" :key="route.name">
                <SlidebarSubmenu v-if="route.routes" :route="route"/>
                <li v-else className="relative px-6 py-3" key={route.name}>
                    <router-link
                        :to="route.path"
                        exact
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        active-class="text-gray-800 dark:text-gray-100"
                    >
                        <span
                            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                            v-if="isActive(route.path)"
                        ></span>
                        <component :is="Icons[route.icon]" class="w-5 h-5" aria-hidden="true"/>
                        <span class="ml-4">{{ route.name }}</span>
                    </router-link>
                </li>
            </template>
        </ul>
        <!-- <div className="px-6 my-6">
        <button class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span className="ml-2" aria-hidden="true">
            +
        </span>
        </button>
        </div> 나중에 다시 돌아오겠다 기다려라 -->
    </div>
</template>