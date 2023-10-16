<template>
  <div class="bg-contrast d-flex flex-column justify-start align-center">
    <h1>My-Routines</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="2" md="2" class="d-md-block d-sm-none">
          <v-sheet>
            <v-layout>
              <v-navigation-drawer class="bg-primary" permanent>
                <v-list nav>
                  <v-list-item
                    prepend-icon="mdi-view-dashboard"
                    title="Home"
                    value="home"
                    to="/home"
                  />
                  <v-list-item
                    prepend-icon="mdi-weight-lifter"
                    title="My Routines"
                    value="my_routines"
                    to="/my-routines"
                  />
                  <v-list-item
                    prepend-icon="mdi-heart"
                    title="Liked"
                    value="liked"
                    to="/home/#liked-section"
                  />
                  <v-list-item
                    prepend-icon="mdi-dumbbell"
                    title="Exercises"
                    value="exercises"
                    to="/exercises"
                  />
                </v-list>
              </v-navigation-drawer>
              <v-main style="height: 225px"></v-main>
            </v-layout>
          </v-sheet>
          <br />
          <br />

          <div class="left-content" height>
            <v-container class="bg-surface-variant mb-6">
              <h3 style="text-align: center">FILTERS</h3>
            </v-container>
            <div class="ml-3">
              <h4>Filter 1</h4>
              <h4>Filter 2</h4>
              <h4>Filter 3</h4>
            </div>
          </div>
        </v-col>

        <v-col cols="9">
          <v-row class="justify-center">
            <v-col
              v-for="(routine_, index) in routines"
              :key="index"
              md="4"
              sm="12"
            >
              <RoutineCard :routine="routine_" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.left-content {
  /* Estilos para el lado izquierdo (25%) */
  background-color: #ccc;
  /* Puedes personalizar el color de fondo */
  height: 200px;
  /* Ajusta la altura según tus necesidades */
}
</style>

<script setup>
import routines from "@/data/mockRoutines";
</script>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
export default {
  data: () => {},
  components: {
    RoutineCard,
  },
  // Resto de tu lógica de componente aquí
};
</script>
