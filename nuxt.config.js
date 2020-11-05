import { author, description } from './package.json'
import FS from 'fs'
import Path from 'path'
import Util from 'util'

const readFile = Util.promisify(FS.readFile)
const writeFile = Util.promisify(FS.writeFile)

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  publicRuntimeConfig: {
    author: author,
    description: description,
    yandexVerification: 'd20b0c51e8077b6f',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
  },

  // Customize the progress-bar color
  loading: { color: '#FF9800' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    './plugins/head.js',
    './plugins/yandex-metrika.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  hooks: {
    generate: {
      async distCopied() {
        const srcDir = Path.join(__dirname, 'assets/turbo')
        const turboPageTemplatePath = Path.join(srcDir, 'page.hbs')

        const NuxtContent = require('@nuxt/content/templates/nuxt-content').default
        const { $content } = require('@nuxt/content')
        const handlebars = require('handlebars')
        const { renderToString } = require('@vue/server-test-utils')

        const turboPages = []

        const nuxtContentFiles = await $content({ deep: true }).fetch()

        const articlesRegex = /^\/articles\/.+/

        const articles = nuxtContentFiles.filter((file) => articlesRegex.test(file.path))

        for (const article of articles) {
          let turboPageContent = await renderToString(NuxtContent, {
            propsData: {
              document: article,
            }
          })

          const turboPageTemplate = await readFile(turboPageTemplatePath)

          const renderTurboPage = handlebars.compile(turboPageTemplate.toString())

          turboPageContent = turboPageContent.replace(/<(?<tag>[^\s]+)(?<attrsBefore>.*)?id="(?<id>[^"]*?)"(?<attrsAfter>.*)?>/gi, (...match) => {
            const { tag, attrsBefore, id, attrsAfter } = match.pop()
            return `<${tag}${attrsBefore}id="${encodeURI(id)}"${attrsAfter}>`
          })

          const turboPage = renderTurboPage({
            link: process.env.BASE_URL + article.path,
            title: article.title,
            content: turboPageContent,
          })

          turboPages.push(turboPage)
        }

        const distDir = Path.join(__dirname, 'dist/_turbo')
        const turboChannelTemplatePath = Path.join(srcDir, 'channel.xml')
        const turboChannelOutputPath = Path.join(distDir, 'articles')
        const turboChannelTemplate = await readFile(turboChannelTemplatePath)

        const renderTurboChannel = handlebars.compile(turboChannelTemplate.toString())

        const turboChannel = renderTurboChannel({
          items: turboPages.join(),
        })

        const mkdirp = require('mkdirp');

        await mkdirp(Path.dirname(turboChannelOutputPath))

        await writeFile(turboChannelOutputPath, turboChannel)
      },
    }
  },
}
