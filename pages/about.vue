<template>
  <div class="space-y-24 md:space-y-96 mt-20 md:mt-80 mb-44 relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
    <main id="sg-mission" class="max-w-3xl mx-auto text-center">
      <h1 class="gradient-text font-medium mb-14">Our Mission</h1>
      <p class="md:text-5xl text-4xl font-semibold mb-14">
        We help entrepreneurs and companies sharpen and achieve their goals <span class="gradient-text">faster</span>.
      </p>
      <p class="max-w-2xl mx-auto text-lg">
        We build products and provide services that help companies increase their development velocity and improve their security posture.
      </p>
    </main>

    <section id="values">
      <button class="gradient-text font-medium mb-24" @click="scrollIntoView('values')">
        <h2>Our Values ↓</h2>
      </button>

      <div class="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-24 items-center">
        <div
          v-for="value in values"
          :key="value.title"
          class="flex flex-col items-center justify-start h-full space-y-6"
        >
          <sg-icon :icon="value.icon" class="rounded-lg text-white h-20 w-20 p-4 bg-gradient-to-br to-purple-600 from-pink-600" />
          <h3 class="text-xl font-semibold">{{ value.title }}</h3>
          <p class="text-gray-500 text-sm text-center">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- <section id="our-story">
      <div class="flex justify-between">
        <div>
          content
        </div>

        <div>
          <img src="~~/assets/images/elon-salfati.jpg" alt="Elon Salfati" class="h-96 w-80 object-cover" />
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://salfati.group/about'
    },
  ]
})

const values = [
  {
    title: 'Transparency',
    description: 'We believe that transparency and trust are the basis for any relationship. So you will find that it\'s a critical part of our culture, both externally and internally.',
    icon: 'chat',
  },
  {
    title: 'Empowering Experience',
    description: 'We focus on fantastic experiences that empower users in customer interactions, onboarding, user journeys, and products.',
    icon: 'emoji-happy',
  },
  {
    title: 'Data Driven',
    description: 'If it\'s not measurable - we avoid it. Data can help us make continuous decisions, and we extend it to our customers as well.',
    icon: 'collection'
  },
  {
    title: 'Humanity',
    description: 'We\'re here to find ways to help you succeed and grow.',
    icon: 'users',
  }
]

/**
 * Scroll to a specific refence by its id
 */
function scrollIntoView(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
