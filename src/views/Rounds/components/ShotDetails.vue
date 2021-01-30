<template>
    <td class="text-center sticky border border-gray-200 p-2" v-for="(shot, index) in shots" :key="index"  >{{ shot[col] }}</td>
</template>

<script>
export default {
  props: ["shots", "col"],
};
</script>
