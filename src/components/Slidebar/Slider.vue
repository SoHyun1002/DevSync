<script setup>
import DesktopSlidebar from './DesktopSlidebar.vue';
import MobileSlidebar from './MobileSlidebar.vue';

const { isSideMenuOpen, closeSideMenu } = defineProps([
    'isSideMenuOpen',
    'closeSideMenu'
])


</script>
<template>
    <DesktopSlidebar/>
    <MobileSlidebar :isSideMenuOpen="isSideMenuOpen" :closeSideMenu="closeSideMenu"/>
</template>