<template>
  <div class="bg-gray-900 px-20 py-16 text-white">
    <div class="space-y-10">
      <div>
        <sg-logo class="w-16 fill-white" />

        <p class="mt-3">
          Salfati Group, Limited.
        </p>

        <p class="opacity-50 mt-4">
          Our mission is to empower your<br />product security and velocity.
        </p>
      </div>

      <div class="flex items-center space-x-4">
        <nuxt-link
          v-for="social in socialLinks"
          :key="social.name"
          :to="social.href"
          class="text-white hover:text-gray-400"
        >
          <sg-icon :icon="social.icon" class="w-6 h-6" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/salfatigroup',
    icon: 'github',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/salfatigroup',
    icon: 'twitter',
  },
]
</script>
