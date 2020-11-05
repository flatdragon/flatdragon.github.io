<template>
  <v-layout fill-height column align-center justify-center>
    <h1>{{ $config.author }}</h1>
    <small>{{ $config.description }}</small>
    <nuxt-link to="/articles">Статьи</nuxt-link>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Главная',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
