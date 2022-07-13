<template>
  <div class="flex items-center justify-between">
    <nuxt-link to="/">
      <sg-logo class="w-16" />
    </nuxt-link>

    <div class="flex items-center space-x-8">
      <nuxt-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.href"
        class="uppercase font-medium gradient-text-hover"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  // {
  //   name: 'Case Studies',
  //   href: '/case-studies',
  // },
  {
    name: 'About',
    href: '/about',
  }
]
</script>
