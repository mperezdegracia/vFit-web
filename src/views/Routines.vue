<template>
  <div class="bg-contrast min h-screen d-flex flex-column justify-center align-center">
    <h1>My-Routines</h1>
    <v-container fluid>
      <v-row>
        <!-- Lado Izquierdo (25%) -->
        <v-col cols="3"> <!-- Cambia el valor de "cols" según tus necesidades -->
          <!-- Contenido del lado izquierdo -->
          <div class="left-content">
            <v-container class="bg-surface-variant mb-6">
              <h3 style="text-align: center;">FILTERS</h3>
            </v-container>
          </div>
        </v-col>

        <!-- Parte derecha (75%) -->
        <v-col cols="9"> <!-- Cambia el valor de "cols" según tus necesidades -->
          
          <v-row>  
            <v-col cols="4"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise/>
            </v-col>
            <v-col cols="4"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise/>
            </v-col> 
            <v-col cols="4"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise/>
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
  background-color: #ccc; /* Puedes personalizar el color de fondo */
  height: 100%; /* Ajusta la altura según tus necesidades */
}

</style>



<script setup>
import Exercise from '@/components/Exercise.vue';
</script>