<template>
  <v-row>
    <v-col cols="12" md="2">
      <SideBar />
    </v-col>

    <v-col>
      <h1 class="font-weight-medium text-primary text-center texto">
        Mis Rutinas
      </h1>

      <v-divider class="mb-4 mx-6"></v-divider>
      <div class="d-flex mr-5 mt-3 mb-0">
        <v-spacer></v-spacer>
        <v-btn
          variant="tonal"
          color="primary"
          to="/routine/create"
          prependIcon="mdi-plus"
        >
          Agregar rutina
        </v-btn>
      </div>

      <RoutineGrid :result="result" :getAllRoutines="getAllRoutines" />
    </v-col>
  </v-row>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { mapActions } from "pinia";
import { useCycleStore } from "@/stores/CycleStore";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";
import RoutineGrid from "@/components/RoutineGrid.vue";
import { useRoutineStore } from "@/stores/RoutineStore";

export default {
  data: () => ({
    result: { content: [] },
  }),
  methods: {
    ...mapActions(useRoutineStore, {
      $getMyRoutines: "getMyRoutines",
    }),
    ...mapActions(useCycleStore, {
      $getAllCycles: "getAll",
    }),
    ...mapActions(useCycleExerciseStore, {
      $getAllExercises: "getAll",
    }),

    async getAllRoutines(params) {
      try {
        const result = await this.$getMyRoutines(params);
        this.result = result;

        await Promise.all(
          this.result.content.map(async (routine) => {
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
    await this.getAllRoutines();
  },
  components: {
    SideBar,
    RoutineGrid,
  },
};
</script>
