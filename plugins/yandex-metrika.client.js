import Vue from 'vue'
import { ymWatcherLoad, ymWatcherInit } from '~/assets/yandex-metrika/script'

export default ({ app: { router } }, inject) => {
  const ymWatcherId = 68665174

  ymWatcherLoad(() => {
    router.onReady(() => {
      const ym = ymWatcherInit(ymWatcherId, {
        defer: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      })

      const observer = new MutationObserver(() => {
        observer.disconnect()
      })

      observer.observe(document.querySelector('title'), {
        childList: true
      })

      router.afterEach((to, from) => {
        Vue.nextTick(() => {
          // TODO: Придумать другое решени проблемы с document.title
          ym('hit', to.fullPath, {
            referer: from.fullPath,
            title:
              to.matched[0].components.default.options.head?.title ??
              document.title
          })
        })
      })

      inject('ym', ym)
    })
  })
}
