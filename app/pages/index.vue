<script setup lang="ts">
  // Find a single author
  const { data: author } = await useAsyncData('larbish', () => {
    return queryCollection('authors')
      .where('name', '=', 'Baptiste Leproux')
      .first()
  })

  // Get all authors
  const { data: authors } = await useAsyncData('authors', () => {
    return queryCollection('authors')
      .order('name', 'DESC')
      .all()
  })
</script>


<template>
  <div class="bg-gray-300 dark:bg-slate-500">
    <div class="container mx-auto px-4 py-4">

      <p class="text-red-500">This is index</p>

      <p class="text-gray-700 dark:text-gray-300">author: {{ author }}</p>
      <p class="text-gray-700 dark:text-gray-300">author: {{ authors }}</p>

    </div>    
  </div>


</template>