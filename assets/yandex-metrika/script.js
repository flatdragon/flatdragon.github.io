export const ymWatcherLoad = (onLoadCallback) => {
  /* eslint-disable */
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,k.onload=onLoadCallback,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  /* eslint-enable */
}

export const ymWatcherInit = (ymWatcherId, options) => {
  /* eslint-disable */
  ym(ymWatcherId, "init", options);

  return (...args) => ym(ymWatcherId, ...args)
  /* eslint-enable */
}
