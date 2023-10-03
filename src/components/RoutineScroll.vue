<template>
        <v-row>
          <v-col class="mx-10" v-for="(routine, index) in routines" :key="index" cols="12" sm="6" md="4" lg="3">
            <RoutineCard :routine="routine" />
          </v-col>
        </v-row>
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
  .routine-scroll {
    
    overflow-x: auto;
    overflow-y: auto;
  }
  </style>