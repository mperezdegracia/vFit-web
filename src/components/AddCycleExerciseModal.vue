<template>
  <v-btn color="primary" variant="tonal" block prepend-icon="mdi-plus">
    Agregar ejercicio
    <v-dialog v-model="dialog" activator="parent" width="600">
      <v-card max-width="600">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-card-title class="text-h5 text-primary mt-4 ml-4"
            >Agrega un ejercicio a tu ciclo</v-card-title
          >
          <v-card-text>
            <v-container>
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

              <SelectExerciseModal
                v-if="!exercise"
                :addExercise="addExercise"
              />
              <v-row v-else align="center">
                <v-col cols="9">
                  <ExerciseCard :exercise="exercise" />
                </v-col>
                <v-col cols="3"
                  ><v-btn
                    @click="exercise = null"
                    icon="mdi-delete"
                    variant="tonal"
                    color="red"
                  ></v-btn
                ></v-col>
              </v-row>
              <v-text-field
                type="hidden"
                v-model="exercise"
                :rules="requiredRule"
                variant="plain"
                flat
              ></v-text-field>

              <v-row class="pt-4 pb-2">
                <v-col cols="12" sm="6" class="py-1" v-if="!onlyTime">
                  <v-text-field
                    v-model="reps"
                    type="number"
                    label="Repeticiones"
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" :sm="onlyTime ? 12 : 6" class="py-1">
                  <v-text-field
                    v-model="duration"
                    type="number"
                    label="Tiempo (en segundos)"
                    :rules="rules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-checkbox
                v-model="onlyTime"
                color="primary"
                label="Sólo tiempo especificado"
              ></v-checkbox>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-row class="pt-4 pb-2" align="center">
                <v-col cols="12" sm="6" class="py-1">
                  <v-btn
                    type="submit"
                    color="orange"
                    variant="tonal"
                    prepend-icon="mdi-plus"
                    block
                    >Agregar</v-btn
                  >
                </v-col>
                <v-col cols="12" sm="6" class="py-1">
                  <v-btn
                    variant="tonal"
                    color="black"
                    @click="closeDialog()"
                    prepend-icon="mdi-close"
                    block
                    >Cerrar</v-btn
                  >
                </v-col>
              </v-row></v-container
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import ExerciseCard from "./ExerciseCard.vue";
import SelectExerciseModal from "./SelectExerciseModal.vue";

export default {
  data: () => ({
    dialog: false,
    error: null,

    exercise: null,
    duration: "",
    reps: "",
    onlyTime: false,

    rules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value <= 999) return true;
        return "El valor máximo es 999.";
      },
    ],
    requiredRule: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],
  }),
  props: {
    cycleIdx: {
      required: true,
    },
    addCycleExercise: {
      required: true,
    },
  },
  methods: {
    addExercise(exercise) {
      this.exercise = exercise;
    },

    closeDialog() {
      this.dialog = false;
      this.exercise = null;
      this.duration = "";
      this.reps = "";
      this.onlyTime = false;
    },

    async submit(event) {
      const result = await event;
      if (!result.valid) return;

      this.addCycleExercise(
        this.cycleIdx,
        this.exercise,
        this.duration,
        this.onlyTime ? 0 : this.reps
      );
      this.closeDialog();
    },
  },
  components: { ExerciseCard, SelectExerciseModal },
};
</script>
