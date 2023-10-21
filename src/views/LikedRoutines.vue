<template>
  <v-row>
    <v-col cols="12" md="2">
      <SideBar />
    </v-col>

    <v-col>
      <h1 class="font-weight-medium text-primary text-center texto">
        Favoritas
      </h1>
      <v-divider class="mb-4 mx-6"></v-divider>
      <RoutineGrid :routines="routines" :getAllRoutines="getAllFavorites" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "pinia";
import { useFavoriteStore } from "@/stores/FavoriteStore";
import { useCycleStore } from "@/stores/CycleStore";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";
import RoutineGrid from "@/components/RoutineGrid.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  data: () => ({
    routines: [],
  }),
  methods: {
    ...mapActions(useFavoriteStore, {
      $getAllFavorites: "getAll",
    }),
    ...mapActions(useCycleStore, {
      $getAllCycles: "getAll",
    }),
    ...mapActions(useCycleExerciseStore, {
      $getAllExercises: "getAll",
    }),

    async getAllFavorites() {
      try {
        const result = await this.$getAllFavorites();
        this.routines = result.content;

        await Promise.all(
          this.routines.map(async (routine) => {
            try {
              const result = await this.$getAllCycles(routine.id);
              routine.cycles = result.content;

              await Promise.all(
                routine.cycles.map(async (cycle) => {
                  try {
                    const result = await this.$getAllExercises(cycle.id);
                    cycle.exercises = result.content;
                  } catch (e) {
                    console.error(e);
                  }
                })
              );
            } catch (e) {
              console.error(e);
            }
          })
        );
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllFavorites();
  },
  components: {
    SideBar,
    RoutineGrid,
  },
};
</script>
