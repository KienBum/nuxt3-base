// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require("path");

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      // apiBase: "http://192.168.1.64:6868/api",
      apiBase: "http://127.0.0.1:8000/",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/sass/_colors.sass" as *\n',
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "VFL ACADEMY",
      meta: [{ name: "description", content: "My amazing site." }],
      link: [
        // {
        //   href: "/css/bootstrap.min.css",
        //   rel: "stylesheet",
        // },
        {
          href: "/css/style.css",
          rel: "stylesheet",
        },
        {
          href: "/css/custom.css",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "/js/bootstrap.bundle.min.js",
        },
      ],
      htmlAttrs: {
        lang: "vi",
        "data-bs-theme": "light",
      },
      bodyAttrs: {
        id: "kt_body",
        class:
          "header-fixed header-tablet-and-mobile-fixed toolbar-enabled aside-fixed aside-default-enabled",
      },
    },
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: {
    //   name: "slide",
    //   mode: "out-in", // default
    // },
    // rootId: "__app",
  },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/i18n",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/image-edge",
    // '@nuxtjs/web-vitals'
  ],
  // imports: {
  //     dirs: ['composables','enums', 'types'],
  // },
  image: {
    provider: "ipx",
  },
  i18n: {
    locales: [
      {
        code: "vi",
        file: "vi-VN.json",
        iso: "vi-VN",
        icon: "emojione:flag-for-vietnam",
      },
      {
        code: "en",
        file: "en_US.json",
        iso: "en_US",
        icon: "emojione:flag-for-liberia",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "vi",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
      cookieCrossOrigin: true,
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // webVitals: {
  //     // provider: '', // auto detectd
  //     debug: false,
  //     disabled: false
  // },
  typescript: {
    strict: true,
  },
  routeRules: {
    "/*": { swr: true },
  },
  ssr: true,
  // experimental: {
  //   payloadExtraction: false
  // }
});
