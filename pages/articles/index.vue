<template>
  <v-container>
    <h1>Статьи</h1>
    <small><b>Автор:</b> {{ $config.author }}</small>
    <ul>
      <li v-for="(article, i) in articles" :key="i">
        <a :href="article.path">{{ article.title }}</a>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Статьи',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'path'])
      .fetch()

    return {
      articles,
    }
  }
}
</script>
