<template>
  <div class="d-flex justify-center align-center ">
    <v-slide-group v-model="model" class="slide" show-arrows transition="all 0.5s">
      <v-slide-group-item v-for="(routine, index) in routines" :key="index">
        <RoutineCard class="mr-10" :routine="routine" />
      </v-slide-group-item>

    </v-slide-group>

  </div>
</template>
  
<script>
import RoutineCard from './RoutineCard.vue';

export default {
  name: "RoutineScroll",
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
  
<style>
.slide {
  max-width: 90%;
}


.routine-scroll {

  overflow-x: auto;
  overflow-y: auto;
}
</style>