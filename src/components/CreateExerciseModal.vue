<template>
  <v-btn color="primary" variant="tonal" prepend-icon="mdi-plus"
    >{{ label || "Agregar ejercicio" }}
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
                :items="['exercise', 'rest']"
              ></v-select>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-row class="pt-4 pb-2" align="center">
                <v-col cols="12" sm="6" class="py-1">
                  <v-btn
                    type="submit"
                    color="green"
                    variant="tonal"
                    :loading="loading"
                    prepend-icon="mdi-content-save"
                    block
                    >Guardar</v-btn
                  >
                </v-col>
                <v-col cols="12" sm="6" class="py-1">
                  <v-btn
                    variant="tonal"
                    color="black"
                    @click="dialog = false"
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
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import { Exercise } from "@/api/exercise";

export default {
  data: () => ({
    dialog: false,
    error: null,
    loading: false,

    name: "",
    detail: "",
    type: null,

    nameRules: [
      (value) => {
        if (value) return true;
        return "Este campo de obligatorio.";
      },
      (value) => {
        if (value?.length <= 100) return true;
        return "El campo tiene que tener menos de 100 caracteres.";
      },
    ],
    detailRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value?.length <= 200) return true;
        return "El campo tiene que tener menos de 200 caracteres.";
      },
    ],
    typeRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],
  }),
  props: {
    label: {
      required: false,
    },
    exercise: {
      required: false,
    },
    getAllExercises: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $createExercise: "create",
      $modifyExercise: "modify",
    }),

    cleanFields() {
      this.dialog = false;
      this.resetFields();
    },

    resetFields() {
      if (this.exercise) return;
      this.name = "";
      this.detail = "";
      this.type = null;
    },

    async submit(event) {
      const result = await event;
      if (!result.valid) return;
      this.error = null;
      this.loading = true;

      try {
        const exercise = new Exercise(this.name, this.detail, this.type);
        if (!this.exercise) {
          await this.$createExercise(exercise);
        } else {
          exercise.id = this.exercise.id;
          await this.$modifyExercise(exercise);
        }

        this.cleanFields();
        this.getAllExercises();
      } catch (e) {
        this.error = e;
      }
      this.loading = false;
    },
  },
  beforeMount() {
    if (!this.exercise) return;
    this.name = this.exercise.name;
    this.detail = this.exercise.detail;
    this.type = this.exercise.type;
  },
};
</script>
