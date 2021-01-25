<template>
    <div>
        <section class="flex flex-wrap">
            <TeesSlopeRating 
            v-for="tee in tees" 
            :key="tee.tees"
            :tees="tee.tees"
            :rating="tee.rating"
            :slope="tee.slope"/>
        </section>
        <table>
            
            <!-- <RowTeeDistances
            v-for="tee in tees.tee_holes"
                :key="tee.tees"
                :tee="tee.tees"
                :tee_holes="tee.tee_holes"
          /> -->
        </table>
    </div>
</template>

<script>
import TeesSlopeRating from "./TeesSlopeRating.vue"

export default {
    components: {
        TeesSlopeRating,
        // RowTeeDistances
    },
    props: [
        'tees'
    ],
}
</script>