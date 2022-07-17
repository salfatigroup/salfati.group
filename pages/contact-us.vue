<template>
  <div class="space-y-24 mt-20 mb-44 relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
    <div class="text-center max-w-xl mx-auto space-y-4">
      <h1 class="text-4xl font-extrabold">
        Talk to one of our <span class="gradient-text">experts</span>
      </h1>

      <p>
        We're here to help you find the right solution for your business. Our team will respond to your question within 24 hours.
      </p>
    </div>

    <div class="flex flex-col md:flex-row justify-between md:space-x-14">
      <form class="flex-col space-y-10 md:gradient-border" action="https://formspree.io/f/xyyorybz" method="POST">
        <div class="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
          <!-- first and last name inputs -->
          <sg-input
            class="w-full md:w-72"
            placeholder="First Name"
            name="first_name"
            type="text"
            required
          />
          <sg-input
            class="w-full md:w-72"
            placeholder="Last Name"
            name="last_name"
            type="text"
            required
          />
        </div>

        <div class="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
          <!-- email and company name inputs -->
          <sg-input
            class="w-full md:w-72"
            placeholder="Email Address"
            name="email"
            type="email"
            required
          />

          <sg-input
            class="w-full md:w-72"
            placeholder="Company Name"
            name="company"
            type="text"
          />
        </div>

        <!-- message text area -->
        <sg-textarea
          rows="10"
          placeholder="Message"
          name="message"
          required
        />

        <div class="flex items-center justify-end">
          <button type="submit" class="md:w-auto w-full text-white font-medium h-12 px-8 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500">
            Submit
          </button>
        </div>
      </form>

      <div class="space-y-6 md:text-left text-center md:mt-0 mt-20">
        <div class="text-xl font-medium">
          "Salfati Group have helped us reach our goals in no time. We are amazed by the quality of products and services they provide."
        </div>

        <div class="flex items-center justify-center space-x-4">
          <img src="~~/assets/images/customers/chariot/salo.jpeg" alt="Salo" class="h-14 w-14 rounded-full" />
          <div class="text-sm">
            <div class="font-bold">Salomon Serfati</div>
            <div class="text-gray-500">Co-founder and CEO, Chariot</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@tailwind utilities;

@responsive {
  .gradient-border {
    --rotation: 2.1025rad;

    @apply p-8 shadow-sm rounded-lg border border-solid border-transparent bg-origin-border relative;
    background-image: linear-gradient(#fff,#fff), linear-gradient(calc(var(--rotation)),#9333ea 0,#db2777 20%,rgba(121,40,202,0) 80%);
    background-clip: padding-box,border-box;
  }
}
</style>
