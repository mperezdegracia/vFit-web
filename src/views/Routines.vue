<template>
  <div class="bg-contrast d-flex flex-column justify-start align-center">
    <v-container fluid>
      <v-row>
        <v-col cols="2" md="2" class="d-md-block d-sm-none">
          <SideBar />
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

        <v-col cols="10">
          <h1>My-Routines</h1>
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
import RoutineCard from "@/components/RoutineCard.vue";
import SideBar from "@/components/SideBar.vue";
</script>
