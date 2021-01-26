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
        <div>
            <table>
                <HoleIndexPar :hip="holeindexpar" />
                
                <TeeDistance
                v-for="tee in teedistances"
                    :key="tee.tees"
                    :tee="tee.tees"
                    :tee_holes="tee.tee_holes"
                />
            </table>
        </div>
    </div>
</template>

<script>
import TeesSlopeRating from "./TeesSlopeRating.vue";
import HoleIndexPar from "./HoleIndexPar.vue";
import TeeDistance from "./TeeDistance.vue";

export default {
    components: {
        TeesSlopeRating,
        HoleIndexPar,
        TeeDistance,
    },
    props: [
        'tees',
        'holeindexpar',
        'teedistances'
    ],
    data() {
        return {
            HoleIndexPar: [],
            // teeOrder: ['1', '2','3','4','5','6','7','8','9',"OUT",'10','11','12','13','14','15','16','17','18',"IN","TOT"]
        }
    },  
    methods: {
        getHoleIndexPar() {
            this.HoleIndexPar = this.holeindexpar.slice().reverse();
        }
    },
    // mounted() {
    //     this.getHoleIndexPar();
    // }
}
</script>