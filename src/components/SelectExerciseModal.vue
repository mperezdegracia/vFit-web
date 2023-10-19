<template>
  <v-btn prepend-icon="mdi-magnify" variant="tonal" color="primary" block>
    Selecciona un ejercicio
    <v-dialog v-model="dialog" activator="parent" width="800">
      <v-card max-width="800">
        <v-card-title class="text-h5 text-primary mt-4 ml-4"
          >Selecciona un ejercicio</v-card-title
        >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col v-if="exercises.length == 0" align="center">
                <v-img src="/empty_list.png" height="250"> </v-img>
              </v-col>
              <v-col
                v-for="(exercise, index) in exercises"
                :key="index"
                align="center"
              >
                <ExerciseCard
                  class="pa-2"
                  :exercise="exercise"
                  :addExercise="addExercise"
                />
              </v-col> </v-row
          ></v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <AddExerciseModal
            variant="tonal"
            :getAllExercises="getAllExercises"
          />
          <v-btn variant="tonal" color="primary" @click="dialog = false"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import ExerciseCard from "./ExerciseCard.vue";
import AddExerciseModal from "./AddExerciseModal.vue";

export default {
  data: () => ({
    exercises: [],
    dialog: false,
    error: null,
  }),
  props: {
    addExercise: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $getAllExercises: "getAll",
    }),
    async getAllExercises() {
      try {
        const result = await this.$getAllExercises();
        this.exercises = result.content;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllExercises();
  },
  components: { ExerciseCard, ExerciseCard, AddExerciseModal },
};
</script>
