<script setup>
import Slider from '@components/Slidebar/Slider.vue';
import Header from '@components/Header.vue';

import { ref } from 'vue';
import routes from '@/routes/sidebar'

const username = ref('')

const isSideMenuOpen = ref(false)

function toggleSideMenu() {
    isSideMenuOpen.value = !isSideMenuOpen.value
}
function closeSideMenu() {
    isSideMenuOpen.value = false
}
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <Slider :isSideMenuOpen="isSideMenuOpen" :closeSideMenu="closeSideMenu"/>
    <div className="flex flex-col flex-1 w-full">
      <Header :toggleSideMenu="toggleSideMenu" :username="username"/>
      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
