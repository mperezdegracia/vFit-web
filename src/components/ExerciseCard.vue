<template>
  <v-card
    :loading="loading"
    class="mx-auto text-left rounded-lg"
    elevation="4"
    min-width="225"
    max-width="350"
    :border="true"
    @click="expand = !expand"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      class="rounded elevation-1"
      height="150"
      :src="exercise.metadata?.image || '/exercise.svg'"
    ></v-img>

    <v-card-item class="px-2">
      <v-card-title>{{ exercise.name }}</v-card-title>
    </v-card-item>

    <v-card-subtitle class="px-2 py-1">
      <span class="font-weight-bold">Tipo: </span>{{ exercise.type }}
    </v-card-subtitle>

    <v-card-text class="px-2">
      {{
        expand
          ? exercise.detail
          : `${exercise.detail.substring(0, 20)}${
              exercise.detail.length > 20 ? "..." : ""
            }`
      }}
    </v-card-text>

    <div v-if="expand && (getAllExercises || addExercise)">
      <v-divider class="mx-2 my-1"></v-divider>
      <v-card-actions>
        <v-row class="pt-2" v-if="getAllExercises">
          <v-col class="py-1">
            <CreateExerciseModal
              label="Editar"
              :exercise="exercise"
              :getAllExercises="getAllExercises"
              color="secondary"
              prepend-icon="mdi-pencil"
              block
            />
          </v-col>
          <v-col class="py-1">
            <DeleteModal
              :object="exercise"
              :deleteAction="$deleteExercise"
              :postDeleteAction="getAllExercises"
            />
          </v-col>
        </v-row>
        <v-row v-else-if="addExercise">
          <v-col>
            <v-btn
              @click="addExercise(exercise)"
              variant="tonal"
              color="primary"
              prepend-icon="mdi-plus"
              block
            >
              Agregar al ciclo
            </v-btn></v-col
          >
        </v-row>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import DeleteModal from "./DeleteModal.vue";
import CreateExerciseModal from "./CreateExerciseModal.vue";

export default {
  data: () => ({
    loading: false,
    expand: false,
    dialog: false,
  }),
  props: {
    exercise: {
      required: true,
    },
    getAllExercises: {
      required: false,
    },
    addExercise: {
      required: false,
    },
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $deleteExercise: "delete",
    }),
  },
  updated() {
    this.expand = false;
  },
  components: { DeleteModal, CreateExerciseModal },
};
</script>
