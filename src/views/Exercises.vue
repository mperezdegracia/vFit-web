<template>
  <v-row>
    <v-col md="2">
      <SideBar />
    </v-col>

    <v-col>

      <h1 class=" font-weight-medium text-primary text-center texto" > Mis Ejercicios</h1>
        
        <v-divider class="my-1"></v-divider>
        <div class="d-flex mr-5 mt-3 mb-0">
          <v-spacer></v-spacer>
          <AddExerciseModal :getAllExercises="getAllExercises" />

        </div>
      

        <v-container fluid>
          <v-row>
            <v-col v-if="exercises.length == 0" align="center">
              <v-img class="rounded" src="/empty.svg" height="250"> </v-img>
            </v-col>
            <v-col
              v-for="(exercise, index) in exercises"
              :key="index"
              align="center"
            >
              <ExerciseCard
                class="pa-2"
                :exercise="exercise"
                :getAllExercises="getAllExercises"
              />
            </v-col>
          </v-row>
        </v-container>
    </v-col>
  </v-row>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import AddExerciseModal from "@/components/AddExerciseModal.vue";

export default {
  data: () => ({
    exercises: [],
  }),
  methods: {
    ...mapActions(useExerciseStore, {
      $getAllExercises: "getAll",
    }),

    async getAllExercises() {
      try {
        const result = await this.$getAllExercises({ size: 12 });
        this.exercises = result.content;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllExercises();
  },
  components: {
    SideBar,
    ExerciseCard,
    AddExerciseModal,
  },
};
</script>
