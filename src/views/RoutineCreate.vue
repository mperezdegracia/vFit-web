<template>
  <div class="bg-contrast min h-screen flex-column pt-4">
    <v-sheet class="mx-auto" max-width="800">
      <v-container class="bg-surface-variant">
        <h3>Describe us your rutine</h3>
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
          <v-expansion-panel
            v-for="ejercicio in ejercicios"
            :key="ejercicio"
          >
            <v-expansion-panel-title>{{ ejercicio.nombre }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ ejercicio.nombre }} - {{ ejercicio.repeticiones }}</v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";

export default {
  data: () => ({
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
  components: {
    RoutineCard,
  },
};
</script>
