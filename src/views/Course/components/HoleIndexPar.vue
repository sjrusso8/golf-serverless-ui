<template>
  <tr class="text-center">
    <td class="text-left">
      <strong>Hole</strong>
    </td>
    <td v-for="value in hip" :key="value.hole">{{ value.hole }}</td>
  </tr>
  <tr class="text-center">
    <td class="text-left">
      <strong>Index</strong>
    </td>
    <td v-for="value in hip" :key="value.hole">{{ value.index }}</td>
  </tr>
  <tr class="text-center">
    <td class="text-left">
      <strong>Par</strong>
    </td>
    <td v-for="value in hip" :key="value.hole">{{ value.par }}</td>
  </tr>
</template>

<script>
export default {
  props: ["hip"]
};
</script>
