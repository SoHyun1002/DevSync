<script setup>
import SidebarContent from '@components/Slidebar/SidebarContent.vue';


const { isSideMenuOpen, closeSideMenu } = defineProps([
    'isSideMenuOpen',
    'closeSideMenu'
])

</script>
<template>
    <!-- <div v-if="false">
        <Transition
                enter-active-class="transition ease-in-out duration-150"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in-out duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
            <Backdrop @click="closeSidebar"/>
        </Transition>
        <Transition
                enter-active-class="transition ease-in-out duration-150"
                enter-from-class="opacity-0 transform -translate-x-20"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in-out duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0 transform -translate-x-20"
            >
            <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden">
                <SidebarContent />
            </aside>
        </Transition>
    </div> -->
    <Transition
        enter-active-class="transition ease-in-out duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="isSideMenuOpen"
            class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        ></div>
    </Transition>
    <Transition
        enter-active-class="transition ease-in-out duration-150"
        enter-from-class="opacity-0 transform -translate-x-20"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0 transform -translate-x-20"
    >
        <aside
            class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
            v-if="isSideMenuOpen"
            @click="closeSideMenu"
        >
            <SidebarContent />
        </aside>    
    </Transition>
</template>