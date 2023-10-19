<template>
  <v-btn variant="tonal" color="red-lighten-1" prepend-icon="mdi-delete" block>
    BORRAR
    <v-dialog v-model="dialog" activator="parent" width="600">
      <v-card max-width="600">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-card-title class="text-h5 text-primary mt-4 ml-4"
            >Seguro que quiere borrar?</v-card-title
          >
          <v-card-text class="ml-4 mt-4">
            <v-alert
              v-if="error"
              color="error"
              class="mb-6 rounded-lg"
              icon="$error"
            >
              <v-alert-title>{{ error.description }}</v-alert-title>
              <ul>
                <li v-for="detail in error.details">
                  {{ detail }}
                </li>
              </ul>
            </v-alert>
            Esta accion no se puede revertir
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="tonal" color="primary" @click="dialog = false"
              >CANCELAR</v-btn
            >
            <v-btn
              @click="deleteExercise()"
              variant="tonal"
              color="red-lighten-1"
              prepend-icon="mdi-delete"
              >BORRAR</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";

export default {
  data: () => ({
    loading: false,
    expand: false,
  }),
  props: {
    exercise: {
      required: true,
    },
    getAllExercises: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $deleteExercise: "delete",
    }),

    async deleteExercise() {
      try {
        await this.$deleteExercise(this.exercise);
        this.getAllExercises();
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
