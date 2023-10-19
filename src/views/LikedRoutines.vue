<template>
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
              <RoutineGrid :routines="routines"></RoutineGrid>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
</template>

<script>
import routines from "@/data/mockRoutines";
import RoutineGrid from "@/components/RoutineGrid.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  data: () => ({
    routines: routines,
  }),
  components: {
    SideBar,
    RoutineGrid
  },
};
</script>
