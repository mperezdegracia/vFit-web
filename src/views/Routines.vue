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
              <h2>My Routines</h2>
            </v-container>

            <v-container fluid>
              <v-row>
                <v-col v-for="(routine, index) in routines" :key="index">
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

export default {
  data: () => ({
    routines: [],
  }),
  methods: {
    ...mapActions(useRoutineStore, {
      $getAllRoutines: "getAll",
    }),

    async getAllRoutines() {
      try {
        const result = await this.$getAllRoutines();
        this.routines = result.content;
        console.log(this.routines);
      } catch (e) {
        console.error(e);
      }
    },
  },
  beforeMount() {
    this.getAllRoutines();
  },
  components: {
    RoutineCard,
    SideBar,
  },
};
</script>
