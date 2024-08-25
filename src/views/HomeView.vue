<script setup>
import BaseInput from '@/components/base-components/BaseInput.vue'

const formFields = [
  { label: 'Name', id: 'name' },
  { label: 'Email', id: 'email' },
  { label: 'Phone', id: 'phone' },
  { label: 'Address', id: 'address' },
  { label: 'City', id: 'city' },
  { label: 'State', id: 'state' },
  { label: 'Zip', id: 'zip' },
  { label: 'Country', id: 'country' }
]
</script>

<template>
  <main class="max-w-6xl m-auto">
    <h1 class="text-3xl font-bold underline">Hey now! This is the home view.</h1>
    <p class="text-sm">This is a simple home view.</p>
    <div class="lg:grid grid-cols-4 gap-4 mt-2">
      <BaseInput
        v-for="field in formFields"
        :key="field.id"
        v-bind="field"
        :label="field.label"
        :id="field.id"
      />
    </div>
  </main>
</template>
