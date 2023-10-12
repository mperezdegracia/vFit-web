<template>
    <div class="d-flex justify-center">

        <v-col cols="9">
            <!-- Cambia el valor de "cols" según tus necesidades -->

            <v-row class="justify-center">
                <v-col v-for="(routine_, index) in routines" :key="index" md="3" sm="12">
                    <!-- Ajusta el valor de "cols" según tus necesidades -->
                    <RoutineCard :routine="routine_" />
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