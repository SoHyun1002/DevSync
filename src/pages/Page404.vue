<script setup>
import { ForbiddenIcon } from '@/icons'
</script>
<template>
    <div class="flex flex-col items-center">
      <ForbiddenIcon class="w-12 h-12 mt-8 text-purple-200" aria-hidden="true" />
      <h1 class="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
      <p class="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or
        <a class="text-purple-600 hover:underline dark:text-purple-300" href="../index.html">
          go back
        </a>
        .
      </p>
    </div>
</template>