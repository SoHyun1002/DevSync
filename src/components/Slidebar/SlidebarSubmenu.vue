<script setup>
import { ref } from 'vue'
import DropdownIcon from '@/icons/dropdown.svg'
import * as Icons from '@/icons'

const props = defineProps({
  route: Object,
});

const setIsDropdownMenuOpen = ref(false)

function handleDropdownMenuClick() {
  setIsDropdownMenuOpen.value = !setIsDropdownMenuOpen.value
}




</script>
<style scoped>
</style>
<template>
    <!-- <li className="relative px-6 py-3" key={route.name}></li> -->
    <li class="relative px-6 py-3">
        <button
            class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            @click="handleDropdownMenuClick"
            aria-haspopup="true"
        >
            <span class="inline-flex items-center">
              <component :is="Icons[route.icon]" class="w-5 h-5" aria-hidden="true"/>
              <span class="ml-4">{{route.name}}</span>
            </span>
            <DropdownIcon class="w-4 h-4" aria-hidden="true" />
        </button>
         <Transition
            enter-active-class="transition-all ease-in-out duration-300"
            enter-from-class="opacity-25 max-h-0"
            enter-to-class="opacity-100 max-h-xl"
            leave-active-class="transition-all ease-in-out duration-300"
            leave-from-class="opacity-25 max-h-0"
            leave-to-class="opacity-0 max-h-0"
        >
            <ul
            v-if="setIsDropdownMenuOpen"
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
            >
              <li
                v-for="r in route.routes"
                className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                key="r.name"
              >
              <router-link :to="r.path" class="w-full">{{ r.name }}</router-link>
              </li>
            </ul>
        </Transition>
    </li>
  </template>