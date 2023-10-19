<template>
    <div class="d-flex justify-center">

        <v-col cols="12">
            <!-- Cambia el valor de "cols" según tus necesidades -->

            <v-row class="justify-center mx-10">
                <v-col v-for="(routine_, index) in routines" :key="index" lg="3" md="4" sm="6" xs="12" class="">
                    <!-- Ajusta el valor de "cols" según tus necesidades -->
                    <div class="d-flex justify-center">
                        <RoutineCard :routine="routine_" />
                    </div>
                </v-col>
            </v-row>
        </v-col>

    </div>
</template>


<script>
import RoutineCard from "./RoutineCard.vue";


export default {
    name: "RoutineGrid",
    components: {
        RoutineCard,
    },
    props: {
        routines: {
            type: Array,
            required: true,
        },
    },
};
</script>