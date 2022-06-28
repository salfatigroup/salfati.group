<template>
  <div>
    <header class="relative w-screen h-[calc(100vh-8em)] flex items-center justify-center">
      <div class="relative max-w-5xl mx-auto">
        <div class="flex items-end justify-center bg-gradient-to-br from-sky-600 to-sky-400 bg-clip-text text-transparent text-center">
          <div>
            <h1 class="text-4xl sm:text-5xl lg:text-8xl tracking-tight font-mrs-saint-delafield">
              Salfati
            </h1>
          </div>

          <div class="font-sans text-sm tracking-wider font-bold mb-4 -ml-14">
            Group
          </div>
        </div>

        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          Focusing on the true innovation and bold visions of the future.
        </p>
      </div>
    </header>

    <div class="px-8 flex flex-col items-center justify-center">
      <h2 class="mb-3">
        Creating a beacon of innovation together.
      </h2>
      <div class="flex items-center justify-center">
        <nuxt-link to="https://givechariot.com">
          <img src="~~/assets/images/customers/chariot.png" alt="Chariot">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
