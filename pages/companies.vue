<template>
  <div class="relative max-w-5xl mx-auto px-3 py-6 md:px-0">
    <h1 class="bg-gradient-to-br from-sky-600 to-sky-400 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center">
      Our pioneer companies
    </h1>

    <div class="space-y-6 mt-6">
      <div v-for="company in companies" :key="company.name" class="hover:bg-sky-600/10 hover:rounded-lg px-4 py-2">
        <NuxtLink :to="company.url">
          <h2 class="text-sky-600 font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight">
            {{ company.name }}
          </h2>

          <p>{{ company.description }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const companies = [
  {
    name: 'Metiss',
    description: 'Autonomous test generation',
    url: 'https://metiss.io',
  },
]
</script>
