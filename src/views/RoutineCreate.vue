<template>
  <div class="bg-contrast min h-screen flex-column pt-4">
    <v-sheet class="mx-auto" max-width="800">
      <v-container class="bg-surface-variant">
        <h3>Describe us your routine</h3>
      </v-container>
      <v-container class="px-16">
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Routine Title"
          required
          hide-details
        >
        </v-text-field>

        <div class="mt-8">
          <div class="text-caption">Select the expected difficulty</div>
          <v-slider
            v-model="difficulty"
            :ticks="difficultyLabels"
            :min="1"
            :max="5"
            step="1"
            show-ticks="always"
            tick-size="4"
            color="orange"
          >
          </v-slider>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet class="mx-auto mt-8" max-width="800">
      <v-container class="bg-surface-variant">
        <h3>Now add your exercises</h3>
      </v-container>
      <v-container class="px-16">
        <div class="text-subtitle-2 mt-4 mb-2">Ejercicios seleccionados</div>
        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel v-for="ejercicio in ejercicios" :key="ejercicio">
            <v-expansion-panel-title class="bg-grey-lighten-2">{{
              ejercicio.nombre
            }}</v-expansion-panel-title>
            <v-expansion-panel-text
              >{{ ejercicio.nombre }} -
              {{ ejercicio.repeticiones }}</v-expansion-panel-text
            >
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-center">
          <v-btn color="primary" block
            >Add an exercise
            <v-dialog v-model="dialog" activator="parent" width="auto">
              <v-card>
                <v-card-title>
                  <span class="text-h5"> Add an exercise </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="exerciseName"
                          label="Exercise name"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="dialog = false">Cancel</v-btn>
                  <v-btn color="primary" @click="addEjercicio">Add</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";

export default {
  data: () => ({
    dialog: false,
    valid: false,
    title: "",
    titleRules: [
      (value) => {
        console.log(value);
        if (value) return true;
        return "Title is required.";
      },
      (value) => {
        if (value?.length <= 30) return true;
        return "Title must be less than 30 characters.";
      },
    ],
    difficulty: "",
    difficultyLabels: {
      1: "Very easy",
      2: "Easy",
      3: "Moderate",
      4: "Hard",
      5: "Really hard",
    },
    exerciseName: "",

    ejercicios: [
      {
        nombre: "Abdominales",
        repeticiones: 6,
      },
      {
        nombre: "Press de banca",
        repeticiones: 8,
      },
      {
        nombre: "Sentadillas",
        repeticiones: 3,
      },
    ],
  }),
  methods: {
    addEjercicio() {
      this.ejercicios.push({ nombre: this.exerciseName, repeticiones: 10 });
      this.dialog = false;
    },
  },
  components: {
    RoutineCard,
  },
};
</script>
