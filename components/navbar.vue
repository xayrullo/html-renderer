<template>
  <nav class="container mx-auto flex items-center justify-between" aria-label="Global">
    <div class="flex lg:flex-1">
      <!-- <Logo /> -->
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <template v-for="item in navigation" :key="item.title">
        <NuxtLink :to="item.to" class="text-sm font-semibold leading-6 text-gray-900">
          {{ item.title }}
        </NuxtLink>
      </template>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <!-- <NuxtLink to="/auth/login" class="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </NuxtLink> -->
    </div>
  </nav>
</template>
<script setup lang="ts">
// import { useAuthStore } from '~~/stores/auth'

import type { INavigationItem } from '~/types';

defineProps<{
  navigation: INavigationItem[]
}>()

// const auth = useAuthStore()
</script>

