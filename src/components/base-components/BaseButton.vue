<script setup>
const props = defineProps({
  label: String
})
</script>
<template>
  <button class="bg-primary hover:text-gray-200 text-white font-bold py-2 px-4 rounded">
    {{ props.label }}
  </button>
</template>
