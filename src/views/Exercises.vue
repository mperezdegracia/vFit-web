<template>
  <v-row>
    <v-col cols="12" md="2">
      <SideBar />
    </v-col>

    <v-col>
      <h1 class="font-weight-medium text-primary text-center texto">
        Mis Ejercicios
      </h1>

      <v-divider class="mb-4 mx-6"></v-divider>
      <div class="d-flex mr-5 mt-3 mb-0">
        <v-spacer></v-spacer>
        <CreateExerciseModal :getAllExercises="getAllExercises" />
      </div>

      <v-container fluid>
        <v-row>
          <v-col v-if="result.content.length == 0" align="center">
            <v-img class="rounded" src="/empty.svg" height="250"> </v-img>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(exercise, index) in result.content"
            :key="index"
            align="start"
            justify="start"
          >
            <ExerciseCard
              class="pa-2 elevation-4"
              :exercise="exercise"
              :getAllExercises="getAllExercises"
            />
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col justify="center" align="center">
            <v-btn
              icon="mdi-chevron-left"
              :disabled="result.page == 0"
              @click="getAllExercises({ page: result.page - 1 })"
              class="mr-1"
            ></v-btn>
            <v-btn
              icon="mdi-chevron-right"
              :disabled="result.isLastPage"
              @click="getAllExercises({ page: result.page + 1 })"
              class="ml-1"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import { mapActions } from "pinia";
import { useExerciseStore } from "@/stores/ExerciseStore";
import CreateExerciseModal from "@/components/CreateExerciseModal.vue";

export default {
  data: () => ({
    result: { content: [] },
  }),
  methods: {
    ...mapActions(useExerciseStore, {
      $getAllExercises: "getAll",
    }),

    async getAllExercises(params) {
      try {
        const result = await this.$getAllExercises(params);
        this.result = result;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllExercises();
  },
  components: {
    SideBar,
    ExerciseCard,
    CreateExerciseModal,
  },
};
</script>
