<template>
  <v-card
    :loading="loading"
    class="mx-auto text-left rounded-lg"
    elevation="4"
    min-width="240"
    max-width="350"
    :border="true"
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
      :src="routine.metadata?.image || '/routine.svg'"
    ></v-img>

    <v-card-item class="px-2">
      <v-card-title>{{ routine.name }}</v-card-title>
    </v-card-item>

    <v-card-subtitle class="px-2">
      <span class="me-1">{{ routine.user.username }}</span>
      <v-icon color="secondary" icon="mdi-account" size="small"></v-icon>
    </v-card-subtitle>

    <v-card-text class="px-2">
      Dificultad:
      <Icon
        v-for="index in 5"
        icon="icon-park-solid:rectangle"
        :color="difficultyColor(index)"
        class="pt-1"
      />
    </v-card-text>
    <v-divider class="mx-2 my-1"></v-divider>

    <v-card-actions>
      <RoutineDetailModal :routine="routine" :getAllRoutines="getAllRoutines" />
    </v-card-actions>
  </v-card>
</template>

<script>
import { Icon } from "@iconify/vue";
import RoutineDetailModal from "./RoutineDetailModal.vue";

export default {
  data: () => ({
    loading: false,
    difficulty: null,
    difficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
  }),
  props: {
    routine: {
      type: Object,
      required: true,
    },
    getAllRoutines: {
      required: true,
    },
  },
  methods: {
    difficultyColor(index) {
      if (this.difficultyIndex() >= index) {
        switch (this.routine.difficulty) {
          case "rookie":
          case "beginner":
            return "#2ff18d"; // green
          case "intermediate":
            return "#fcbd00"; // yellow
          default:
            return "red";
        }
      } else {
        return "grey";
      }
    },

    difficultyIndex() {
      if (!this.difficulty)
        this.difficulty =
          this.difficulties.findIndex(
            (dif) => dif === this.routine.difficulty
          ) + 1;
      return this.difficulty;
    },
  },
  updated() {
    this.difficulty = null;
  },
  components: {
    Icon,
    RoutineDetailModal,
  },
};
</script>
