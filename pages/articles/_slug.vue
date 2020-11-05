<template>
  <v-container>
    <article>
      <header>
        <h1>{{ article.title }}</h1>
      </header>
      <nuxt-content :document="article" />
    </article>
  </v-container>
</template>

<script>
export default {
  validate({ params }) {
    return params.slug !== undefined && /^.+$/.test(params.slug)
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  }
}
</script>
