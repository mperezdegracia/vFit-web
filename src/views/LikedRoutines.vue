<template>
  <div class="bg-contrast">
    <v-container fluid>
      <v-row>
        <v-col md="2">
          <SideBar />
        </v-col>

        <v-col>
          <v-sheet class="mx-auto elevation-6 rounded-lg">
            <v-container class="bg-primary rounded-t-lg" fluid>
              <h2>Liked Routines</h2>
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
import routines from "@/data/mockRoutines";
import RoutineCard from "@/components/RoutineCard.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  data: () => ({
    routines: routines,
  }),
  components: {
    RoutineCard,
    SideBar,
  },
};
</script>
