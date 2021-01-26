<template>
  <tr class=" border-solid border-gray-200">
    <td class="text-center sticky border-b border-r border-black py-2">
      <span class="font-bold text-md tracking-wider uppercase">Hole</span>
    </td>
    <td class="text-center sticky border-b border-black font-bold" v-for="value in hip" :key="value.hole">{{ value.hole }}</td>
  </tr>
  <tr class="">
    <td class="text-center sticky border-b border-r border-black py-2">
      <span class="font-bold text-md tracking-wider uppercase">Index</span>
    </td>
    <td class="text-center sticky border-b border-black" v-for="value in hip" :key="value.hole">{{ value.index }}</td>
  </tr>
  <tr class="">
    <td class="text-center sticky border-b-2 border-r border-black py-2">
      <span class="font-bold text-md tracking-wider uppercase">Par</span>
    </td>
    <td class="text-center sticky border-b-2 border-black" v-for="value in hip" :key="value.hole">{{ value.par }}</td>
  </tr>
</template>

<script>
export default {
  props: ["hip"]
};
</script>
