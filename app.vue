<template>
  <Html lang="en" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const appName = "HTML Renderer"

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName}` : appName
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'description',
    },
  ],
})
</script>