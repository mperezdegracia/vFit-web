<template>
  <v-row>
    <v-col md="2">
      <SideBar />
    </v-col>

    <v-col>
      <v-sheet class="mx-auto elevation-6 rounded-lg">
        <v-container class="bg-primary rounded-t-lg" fluid>
          <v-row>
            <v-col>
              <h2>Mis Ejercicios</h2>
            </v-col>
            <v-col class="text-right">
              <AddExerciseModal :getAllExercises="getAllExercises" />
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
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
      </v-sheet>
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
  beforeMount() {
    this.getAllExercises();
  },
  components: {
    SideBar,
    ExerciseCard,
    AddExerciseModal,
  },
};
</script>
