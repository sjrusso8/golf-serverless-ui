<template>
    <div>
        <section class="flex w-1/2 flex-wrap p-2">
            <TeesSlopeRating 
                :tees="tees.tees"
                :rating="tees.rating"
                :slope="tees.slope"/>
        </section>
        <div class="p-4 overflow-x-auto rounded-md overflow-y-auto relative">
            <table class="table-auto w-full whitespace-no-wrap bg-white relative shadow rounded-md">
                <HoleIndexPar :hip="holeindexpar" />
                
                <tr v-for="(value, index) in shotRows" :key="index">
                    <td class="text-center sticky border-b border-r border-black bg-green-100">
                        <span class="font-bold text-sm tracking-wider uppercase">{{ value.row }}</span>
                    </td>
                    <ShotDetails
                        v-for="shot in shotdata"
                            :key="shot.hole"
                            :col="value.col"
                            :shots="shot.shots"
                    />
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import TeesSlopeRating from "./TeesSlopeRating.vue";
import HoleIndexPar from "./HoleIndexPar.vue";
import ShotDetails from "./ShotDetails.vue";

export default {
    components: {
        TeesSlopeRating,
        HoleIndexPar,
        ShotDetails,
    },
    props: [
        'tees',
        'holeindexpar',
        'shotdata'
    ],
    data() {
        return {
            HoleIndexPar: [],
            shotRows: [
                {row:'Strokes', col:'nr_strokes'}, 
                {row:'Putts', col:'nr_putts'}, 
                {row:'FIRs', col:'fairway_hit'}, 
                {row:'GIRs', col:'gir_flag'}, 
                {row:'Putt Acc', col:'putt_accuracy'}, 
            ]
        }
    },  
}
</script>