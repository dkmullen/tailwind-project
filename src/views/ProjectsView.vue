<script setup>
import BaseButton from '@/components/base-components/BaseButton.vue'
import BaseTable from '@/components/base-components/BaseTable.vue'

const movies = [
  { id: 1, title: 'Heat', director: 'Michael Mann', year: 1995 },
  { id: 2, title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
  { id: 3, title: 'Apocalypse Now', director: 'Francis Ford Coppolla', year: 1979 },
  { id: 4, title: 'The Godfather', director: 'Francis Ford Coppolla', year: 1972 },
  { id: 5, title: 'The Godfather Part II', director: 'Francis Ford Coppolla', year: 1974 },
  { id: 6, title: 'The Conversation', director: 'Francis Ford Coppolla', year: 1974 }
]
const headers = ['Id', 'Title', 'Director', 'Year']
</script>
<template>
  <main class="max-w-6xl m-auto">
    <h1 class="text-3xl font-bold underline">This is the projects view.</h1>
    <p class="text-sm">This is a simple projects view.</p>
    <BaseTable :headers="headers" :items="movies" />
    <BaseButton label="Click me" />
  </main>
</template>
