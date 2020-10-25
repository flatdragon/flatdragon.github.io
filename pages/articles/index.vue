<template>
  <v-container>
    <h1>Статьи</h1>
    <small><b>Автор:</b> {{ author }}</small>
    <ul>
      <li v-for="(article, i) in articles" :key="i">
        <a :href="article.path">{{ article.title }}</a>
      </li>
    </ul>
  </v-container>
</template>

<script>
import { author } from '~/package.json'

const title = 'Статьи'

export default {
  head: {
    title
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'path'])
      .fetch()

    return {
      title,
      author,
      articles
    }
  }
}
</script>
