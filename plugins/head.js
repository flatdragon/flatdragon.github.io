import ymPixel from '~/assets/yandex-metrika/pixel.js'

export default (ctx) => {
  const head = ctx.app.head
  const config = ctx.$config

  head.titleTemplate = (title) =>
    title ? `${title} | ${config.description}` : config.description

  head.meta.push({
    hid: 'description',
    name: 'description',
    content: config.description,
  })

  head.meta.push({
    hid: 'yandex-verification',
    name: 'yandex-verification',
    content: config.yandexVerification
  })

  head.noscript = head.noscript ?? []

  head.noscript.push({
    hid: 'yandex-metrika-pixel',
    innerHTML: ymPixel,
    body: true,
  })

  head.__dangerouslyDisableSanitizersByTagID = head.__dangerouslyDisableSanitizersByTagID ?? {}

  head.__dangerouslyDisableSanitizersByTagID['yandex-metrika-pixel'] = ['innerHTML']
}
