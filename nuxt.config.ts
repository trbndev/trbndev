import tailwindTypography from '@tailwindcss/typography';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  site: {
    url: 'https://trbn.dev/',
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    "@nuxt/image",
    'nuxt-og-image'
  ],
  devtools: { enabled: true },
  ui: {
    global: true
  },
  tailwindcss: {
    config: {
      plugins: [
        tailwindTypography
      ],
      theme: {
        extend: {
          typography: {
            DEFAULT: {
              css: {
                maxWidth: '80ch',
              }
            }
          }
        }
      }
    }
  }
})