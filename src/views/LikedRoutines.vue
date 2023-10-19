<template>
  <v-row>
    <v-col md="2">
      <SideBar />
    </v-col>

        <v-col>
          <h1 class=" font-weight-medium text-primary text-center texto" >Favoritas</h1>
            <v-divider></v-divider>
            <v-container fluid>
              <RoutineGrid :routines="routines"></RoutineGrid>
            </v-container>
        </v-col>
      </v-row>
</template>

<style>
</style>
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
