<template>
  <div>
    <label :for="props.id">{{ props.label }}</label
    ><br />
    <input :type="props.type" :id="props.id" :name="props.id" class="border rounded h-12" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  id: String,
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})
</script>
