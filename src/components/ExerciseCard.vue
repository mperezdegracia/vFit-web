<template>
  <v-card
    :loading="loading"
    class="mx-auto text-left bg-grey-lighten-4"
    width="270"
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
          : `${exercise.detail.substring(0, 30)}${
              exercise.detail.length > 30 ? "..." : ""
            }`
      }}
    </v-card-text>

    <div v-if="expand && (getAllExercises || addExercise)">
      <v-divider class="mx-2 my-1"></v-divider>
      <v-card-actions>
        <v-row no-gutters v-if="getAllExercises">
          <v-col class="mr-1">
            <v-btn
              variant="tonal"
              color="primary"
              prepend-icon="mdi-pencil"
              block
              >Editar</v-btn
            ></v-col
          >
          <v-col class="ml-1">
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
              Añadir al ciclo
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
  components: { DeleteModal },
};
</script>
