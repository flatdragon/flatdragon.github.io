<template>
  <v-layout fill-height column align-center justify-center>
    <h1>{{ author }}</h1>
    <small>{{ description }}</small>
  </v-layout>
</template>

<script>
import { author, description } from '~/package.json'

export default {
  computed: {
    author: () => author,
    description: () => description
  }
}
</script>
