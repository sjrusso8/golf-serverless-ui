<template>
  <div class="p-2 m-1 flex flex-col text-center bg-white rounded-md shadow" >
    <p class="text-gray-400">Tee: <span class="text-black font-bold">{{ tees }}</span></p>
    <p class="text-gray-400">Rating: <span class="text-black font-bold">{{ rating }}</span></p>
    <p class="text-gray-400">Slope: <span class="text-black font-bold">{{ slope }}</span></p>
  </div>
</template>

<script>
export default {
  props: ["tees", "rating", "slope"]
};
</script>
