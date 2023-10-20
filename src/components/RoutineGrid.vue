<template>
  <v-container fluid>
    <v-row>
      <v-col v-if="routines.length == 0" align="center">
        <v-img class="rounded" src="/empty.svg" height="250"> </v-img>
      </v-col>
      <v-col
        sm="6"
        md="4"
        lg="3"
        v-for="(routine, index) in routines"
        :key="index"
        align="start"
        justify="start"
      >
        <RoutineCard
          class="pa-2"
          :routine="routine"
          :getAllRoutines="getAllRoutines"
        />
      </v-col>
    </v-row>
  </v-container>
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
    getAllRoutines: {
      required: true,
    },
  },
};
</script>
