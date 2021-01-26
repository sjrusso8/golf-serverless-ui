<template>
    <tr class="hover:bg-gray-100">
        <td class="text-center sticky bg-gray-100 border-b border-r border-black">
            <span  class="font-bold text-md tracking-wider uppercase">{{ tee }}</span>
        </td>
        <td class="text-center sticky border-b border-black" v-for="hole in tee_holes" :key="hole.hole">{{ hole.distance }}</td>
    </tr>
</template>

<script>
export default {
  props: ["tee", "tee_holes"]
};
</script>
