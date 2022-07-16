<template>
  <div class="space-y-24 md:space-y-52 pb-32">
    <!-- background -->
    <div class="rotate-bg"></div>

    <!-- content -->
    <main class="relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <div class="text-5xl mx-auto font-semibold space-y-4 max-w-4xl">
        <h1 class="text-white drop-shadow-md">
          Unlock your true potential
        </h1>

        <p class="text-4xl">
          We provide unique and powerful tools and services to help you scale your business and protect your data.
        </p>
      </div>

      <div class="relative w-40 h-60 text-gray-400 hidden sm:block">
        <div class="absolute top-32 -left-16 rotate-90">
          <div class="flex items-center space-x-2">
            <div class="uppercase">scroll</div>
            <div class="bg-gray-400/40 h-px w-20 shrink"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- inspiring paragraph about the benefits of working with salfati group -->
    <section class="relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 space-y-4">
      <p class="max-w-2xl">
        Growth starts where comfort ends. In order to grow, we must be willing to leave our comfort zones and venture into the unknown. It is only by pushing ourselves to new levels that we can achieve greater things. The tech industry is constantly evolving and growing, and so must we.
      </p>

      <button class="gradient-text font-medium" @click="scrollIntoView('recent-success-stories')">
        Explore our recent success stories ↓
      </button>
    </section>

    <!-- recent success stories -->
    <section id="recent-success-stories" class="relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <div
        v-for="story in successStories"
        :key="story.title"
        class="flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0"
      >
        <div class="max-w-2xl space-y-8">
          <div class="space-y-3">
            <client-only>
              <img :src="requireImage(story.logo)" :alt="`${story.company} logo`" class="h-5" />
            </client-only>
            <h2 class="text-3xl font-semibold">
              {{ story.title }}
            </h2>
          </div>

          <p class="text-lg text-gray-500">
            {{ story.description }}
          </p>

          <!-- tags -->
          <div class="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm font-medium divide-x-2 gradient-text">
            <div v-for="tag in story.tags" :key="tag" class="pl-3 sm:pl-6 first:p-0">
              {{ tag }}
            </div>
          </div>
        </div>

        <div>
          <client-only>
            <img :src="requireImage(story.image)" :alt="story.title" class="h-96" />
          </client-only>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// success stories data
const successStories = [
  {
    title: 'Product MVP & Cybersecurity Architecture',
    company: 'Chariot',
    website: 'https://givechariot.com',
    logo: 'customers/chariot/logo.png',
    tags: [
      'Architecture',
      'Cybersecurity',
      'Development',
      'Cloud'
    ],
    description: 'Chariot provides a seamless payment button to enable donor-advised funds as a payment method for nonprofits. Salfati Group helped Chariot to bring its vision to life quickly and securely by helping with the software and cybersecurity architecture, development, and cloud deployment.',
    image: 'customers/chariot/work.gif',
  }
]

const requireImage = (image: string) => new URL(`../assets/images/${image}`, import.meta.url)

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

<style lang="postcss" scoped>
@keyframes chaning-hue {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
}

@keyframes shrink {
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(0.1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  50% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, 0px, 0px) scale3d(0.1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

.shrink {
  transform-style: preserve-3d;
  will-change: transform;
  transform-origin: 0% 50%;
  animation: shrink 1.5s ease-in-out infinite;
}

.rotate-bg {
  @apply absolute left-0 top-0 right-0 bottom-0 h-[50rem] bg-[url('../assets/images/bg.png')] bg-cover bg-no-repeat -z-10;
  will-change: filter;
  background-position: 50% 100%;
  animation: chaning-hue infinite 8s ease-in-out;
}
</style>
