<script setup lang="ts">
  const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })

</script>

<template>
  <div class="bg-gray-300 dark:bg-slate-500">
    <div class="container mx-auto px-4 py-4">
      <div class="">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Home not found</div>
      </div>
    </div>
  </div>
</template>
