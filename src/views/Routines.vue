<template>
  <div class="bg-contrast pt-4 pb-16">
    <v-container fluid>
      <v-row>
        <v-col md="2">
          <SideBar />
        </v-col>

        <v-col>
          <v-sheet class="mx-auto elevation-6 rounded-lg">
            <v-container class="bg-primary rounded-t-lg" fluid>
              <v-row>
                <v-col>
                  <h2>My Routines</h2>
                </v-col>
                <v-col class="text-right">
                  <router-link to="/routine/create">
                    <v-btn color="white" class="text-primary">
                      Add routine
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
    </v-container>
  </div>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
import SideBar from "@/components/SideBar.vue";
import { mapActions } from "pinia";
import { useRoutineStore } from "@/stores/RoutineStore";
import { useCycleStore } from "@/stores/CycleStore";
import routines from "@/data/mockRoutines";
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

    async getAllRoutines() {
      try {
        const result = await this.$getAllRoutines();
        this.routines = result.content;
      } catch (e) {
        console.error(e);
      }
    },

    async getCycles(routine) {
      try {
        const result = await this.$getAllCycles(routine.id);
        routine.cycles = result.content;
      } catch (e) {
        console.error(e);
      }
    },

    async getExercises(cycle) {
      try {
        const result = await this.$getAllExercises(cycle.id);
        cycle.exercises = result.content;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllRoutines();
    this.routines.forEach(async (routine) => {
      await this.getCycles(routine);
      routine.cycles.forEach(async (cycle) => {
        await this.getExercises(cycle);
      });
    });
  },
  components: {
    RoutineCard,
    SideBar,
  },
};
</script>
