<script setup>
import { 
  MenuIcon, 
  SearchIcon, 
  SunIcon, 
  MoonIcon, 
  OutlinePersonIcon, 
  OutlineCogIcon, 
  OutlineLogoutIcon 
} from '@/icons'

import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const dark = useDark()
const toggleTheme = useToggle(dark)

const isNotificationsMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)

function toggleNotificationsMenu() {
    isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value
    isProfileMenuOpen.value = false
}
function toggleProfileMenu() {
    isProfileMenuOpen.value = !isProfileMenuOpen.value
    isNotificationsMenuOpen.value = false
}


const { toggleSideMenu } = defineProps(['toggleSideMenu']);
</script>
<template>
    <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <!-- Mobile hamburger -->
            <button
              class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              @click="toggleSideMenu"
              aria-label="Menu"
            >
                <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </button>
            <!-- <button @click="updateLocation">{{ location }}</button> -->
            <!-- Search input -->
            <div class="flex justify-center flex-1 lg:mr-32">
              <div
                class="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
              >
                <div class="absolute inset-y-0 flex items-center pl-2">
                    <SearchIcon class="w-4 h-4" />  
                </div>
                <input
                  class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search for projects"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <!-- Theme toggler -->
                <li class="flex">
                <button
                    class="rounded-md focus:outline-none focus:shadow-outline-purple"
                    @click="toggleTheme()"
                    aria-label="Toggle color mode"
                >
                    <template v-if="!dark">
                    <SunIcon class="w-5 h-5" aria-hidden="true" />
                    </template>
                    <template v-if="dark">
                    <MoonIcon class="w-5 h-5" aria-hidden="true" />
                    </template>
                </button>
                </li>
                <!-- Notifications menu -->
                <li class="relative">
                    <button
                        class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                        @click="toggleNotificationsMenu"
                        @keydown.escape="closeNotificationsMenu"
                        aria-label="Notifications"
                        aria-haspopup="true"
                    >
                        <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path
                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                        ></path>
                        </svg>
                        <!-- Notification badge -->
                        <span
                        aria-hidden="true"
                        class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                        ></span>
                    </button>
                    <Transition
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <ul
                            v-if="isNotificationsMenuOpen"
                            @click="closeNotificationsMenu"
                            @keydown.escape="closeNotificationsMenu"
                            class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                        >
                            <li class="flex">
                            <a
                                class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                href="#"
                            >
                                <span>Messages</span>
                                <span
                                class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                >
                                13
                                </span>
                            </a>
                            </li>
                            <li class="flex">
                            <a
                                class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                href="#"
                            >
                                <span>Sales</span>
                                <span
                                class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                >
                                2
                                </span>
                            </a>
                            </li>
                            <li class="flex">
                            <a
                                class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                href="#"
                            >
                                <span>Alerts</span>
                            </a>
                            </li>
                        </ul>
                    </Transition>
                </li>
              <!-- Profile menu -->
              <li class="relative">
                <button
                  class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  @click="toggleProfileMenu"
                  @keydown.escape="closeProfileMenu"
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <Transition
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                  <ul
                    v-if="isProfileMenuOpen"
                    class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu"
                  >
                    <li class="flex">
                      <a
                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <OutlinePersonIcon class="w-4 h-4 mr-3" aria-hidden="true" />
                        <span>프로필</span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <OutlineCogIcon class="w-4 h-4 mr-3" aria-hidden="true" />
                        <span>설정</span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                        @click="alert('Log out!')"
                      >
                        <OutlineLogoutIcon class="w-4 h-4 mr-3" aria-hidden="true" />
                        <span>로그아웃</span>
                      </a>
                    </li>
                  </ul>
                </Transition>
              </li>
            </ul>
        </div>
    </header>
</template>