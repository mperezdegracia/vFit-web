<template>
  <v-btn color="secondary" variant="tonal">
    Agregar ejercicio
    <v-dialog v-model="dialog" activator="parent" width="600">
      <v-card max-width="600">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-card-title class="text-h5 text-primary mt-4 ml-4"
            >Crear un ejercicio nuevo</v-card-title
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

              <v-text-field
                v-model="name"
                label="Nombre del ejercicio"
                :rules="nameRules"
                :counter="100"
              ></v-text-field>
              <v-textarea
                v-model="detail"
                label="Detalle del ejercicio"
                :rules="detailRules"
                :counter="200"
              ></v-textarea>
              <v-select
                v-model="type"
                label="Tipo de ejercicio"
                :rules="typeRules"
                :items="['Exercise', 'Rest']"
              ></v-select>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="tonal" color="primary" @click="dialog = false"
              >Cerrar</v-btn
            >
            <v-btn type="submit" color="primary" variant="tonal">Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import { Exercise } from "@/api/exercise";

export default {
  data: () => ({
    dialog: false,
    error: null,

    name: "",
    detail: "",
    type: null,

    nameRules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
      (value) => {
        if (value?.length <= 100) return true;
        return "Name has to be less than 100 characters long.";
      },
    ],
    detailRules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
      (value) => {
        if (value?.length <= 200) return true;
        return "Detail has to be less than 200 characters long.";
      },
    ],
    typeRules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
    ],
  }),
  props: {
    getAllExercises: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $createExercise: "create",
    }),

    cleanFields() {
      this.dialog = false;
      this.name = "";
      this.detail = "";
      this.type = null;
    },

    async submit(event) {
      const result = await event;
      if (!result.valid) return;
      this.error = null;

      try {
        const exercise = new Exercise(
          this.name,
          this.detail,
          this.type.toLowerCase()
        );
        await this.$createExercise(exercise);

        this.cleanFields();
        this.getAllExercises();
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
