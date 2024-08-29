<script setup>
const props = defineProps({
  headers: Array,
  items: Array
})
function parseHeader(h) {
  return h.charAt(0).toUpperCase() + h.slice(1).toLowerCase()
}
</script>
<template>
  <div class="standard w-full">
    <table class="border-collapse table-auto w-full text-md standard">
      <thead class="bg-blue-50">
        <tr>
          <th v-for="(i, index) in props.headers" :key="index" class="border p-4">{{ i }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Object.values(items)" :key="item.id" class="hover:bg-grey-lighter">
          <td class="border p-4" v-for="(j, idx) in item" :key="idx">{{ j }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <table class="border-collapse table-auto w-full text-md m-4 standard mobile">
    <tbody>
      <tr v-for="item in Object.values(props.items)" :key="item.id" class="hover:bg-grey-lighter">
        <td class="border p-4">
          <div v-for="(j, idx) in item" :key="idx">
            <b class="mr-2">{{ parseHeader(idx) }}:</b>
            {{ j }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.standard {
  display: table;
}
.mobile {
  display: none;
}

@media (max-width: 768px) {
  .standard {
    display: none;
  }
  .mobile {
    display: table;
  }
}
</style>
