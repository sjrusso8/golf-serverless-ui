<template>
    <tr id="par" class="text-center">
        <td class="text-left">
            <strong>{{ tee }}</strong>
        </td>
        <td v-for="hole in tee_holes" :key="hole.hole">{{ hole.distance }}</td>
    </tr>
</template>

<script>
export default {
  props: ["tee", "tee_holes"]
};
</script>
