// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@vuestic/nuxt", "@nuxt/image-edge"],
    css: [
      '/assets/css/global.css', '/assets/fonts/ubuntu.css'
    ],
    vuestic: {
        config: {
          colors: {
            presets: {
              light: {
                primary: '#1D2F49',
                secondary: '#E0AF4F',
              },
              dark: {
                primary: '#1D2F49',
                secondary: '#E0AF4F',
              }
            }
          },
        },
      },
})
