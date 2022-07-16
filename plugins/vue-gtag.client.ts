import VueGtag, { trackRouter } from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    useDebugger: process.env.NODE_ENV !== 'production',
    isEnabled: true,
    property: {
      id: 'G-25H78PJV3C',
      params: {
        linker: {
          domains: ['localhost:3000', 'salfati.group']
        }
      }
    }
  })

  trackRouter(useRouter())
})
