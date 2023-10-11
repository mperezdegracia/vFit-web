<template>
  <div class="bg-contrast d-flex flex-column justify-start align-center">
    <h1>My-Routines</h1>
    <v-container fluid>
      <v-row>
        <!-- Lado Izquierdo (25%) -->
        <v-col cols="3" md="3" class="d-md-block d-sm-none">
          <!-- Cambia el valor de "cols" según tus necesidades -->
          <!-- Contenido del lado izquierdo -->
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

        <!-- Parte derecha (75%) -->
        <v-col cols="9">
          <!-- Cambia el valor de "cols" según tus necesidades -->

          <v-row class="justify-center">
            <v-col
              v-for="(routine_, index) in routines"
              :key="index"
              md="4"
              sm="12"
            >
              <!-- Ajusta el valor de "cols" según tus necesidades -->
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
