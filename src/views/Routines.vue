<template>
  <v-row>
    <v-col md="2">
      <SideBar />
    </v-col>

    <v-col>
      <v-sheet class="mx-auto elevation-6 rounded-lg">
        <v-container class="bg-primary rounded-t-lg" fluid>
          <v-row>
            <v-col>
              <h2>Mis Rutinas</h2>
            </v-col>
            <v-col class="text-right">
              <router-link to="/routine/create">
                <v-btn color="white" class="text-primary">
                  Agregar rutina
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
            <v-col
              v-for="(routine, index) in routines"
              :key="index"
              align="center"
            >
              <RoutineCard class="pa-2" :routine="routine" />
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
import SideBar from "@/components/SideBar.vue";
import { mapActions } from "pinia";
import { useRoutineStore } from "@/stores/RoutineStore";
import { useCycleStore } from "@/stores/CycleStore";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";

export default {
  data: () => ({
    routines: [],
    dataReady: false,
  }),
  methods: {
    ...mapActions(useRoutineStore, {
      $getAllRoutines: "getAll",
    }),
    ...mapActions(useCycleStore, {
      $getAllCycles: "getAll",
    }),
    ...mapActions(useCycleExerciseStore, {
      $getAllExercises: "getAll",
    }),
  },
  async beforeMount() {
    try {
      const result = await this.$getAllRoutines();
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
  components: {
    RoutineCard,
    SideBar,
  },
};
</script>
