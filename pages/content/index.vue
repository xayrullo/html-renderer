<template>
    <div class="p-4 xl:p-0">
      <div class="text-center py-10 md:max-w-xl md:mx-auto">
        <h1 class="text-3xl mb-3 mt-2 font-semibold tracking-normal text-gray-800">
          Content
        </h1>
        <h2 class="text-lg mb-8 font-normal text-gray-600 dark:text-gray-400">
          Out latest articles and news from the team and community members about the project.
        </h2>
      </div>
  
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="i in 12" :key="i" class="bg-gray-200 h-56 animate-pulse rounded-lg" />
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ContentItem v-for="content in data?.posts" :key="content.id" :content="content" />
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import type { IContent } from '~/types'
  
  const { data, pending, error } = await useLazyFetch<{
    posts: IContent[]
  }>('https://dummyjson.com/posts')
  
  useHead({
    title: 'Blog',
  })
  </script>