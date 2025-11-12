<script setup>
  const colorMode = useColorMode()



</script>


<template>
  <div class="bg-blue-600">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        
        <div class="">
          <p class="text-green-400 font-semibold">This is header</p>
        </div>
        <div class="flex gap-8 items-center">
          <nuxt-link :to="{'name': 'index'}" class="text-white">Главная</nuxt-link>
          <nuxt-link :to="{'name': 'about'}" class="text-white">О сайте</nuxt-link>
          <div>
            <p class="">
              <select
                v-model="colorMode.preference"
                class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>  