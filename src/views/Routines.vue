<template>
  <div class="bg-contrast min h-screen d-flex flex-column justify-center align-center">
    <h1>My-Routines</h1>
    <v-container fluid>
      <v-row>
        <!-- Lado Izquierdo (25%) -->
        <v-col cols="3" md="3" class="d-md-block d-sm-none"> <!-- Cambia el valor de "cols" según tus necesidades -->
          <!-- Contenido del lado izquierdo -->
          <div class="left-content" height>
            <v-container class="bg-surface-variant mb-6">
              <h3 style="text-align: center;">FILTERS</h3>
            </v-container>
            <div class="ml-3">
              <h4>Filter 1</h4>
              <h4>Filter 2</h4>
              <h4>Filter 3</h4>
            </div>
          </div>
        </v-col>

        <!-- Parte derecha (75%) -->
        <v-col cols="9"> <!-- Cambia el valor de "cols" según tus necesidades -->
          
          <v-row>  
            <v-col md="4" sm="12"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise
                :name="exerciseName1"
                :rate="exerciseRate1"
                :dif="exerciseDif1"
                :user="exerciseUser1"
                :exercises="exerciseList1"
              />
            </v-col>
            <v-col md="4" sm="12"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise
                :name="exerciseName2"
                :rate="exerciseRate2"
                :dif="exerciseDif2"
                :user="exerciseUser2"
                :exercises="exerciseList2"
              />
            </v-col> 
            <v-col md="4" sm="12"> <!-- Ajusta el valor de "cols" según tus necesidades -->
              <Exercise
                :name="exerciseName3"
                :rate="exerciseRate3"
                :dif="exerciseDif3"
                :user="exerciseUser3"
                :exercises="exerciseList3"
              />
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
  height: 200px; /* Ajusta la altura según tus necesidades */
}

</style>



<script default>
import Exercise from '@/components/Exercise.vue';

export default{
  data() {
    return {
      // TODOS ESTOS DATOS LOS TENEMOS Q TRAER DE LA API
      exerciseName1: 'Routine 1', // Define los valores deseados aquí
      exerciseUser1: 'User 1',
      exerciseRate1: 4,
      exerciseDif1: 3,
      exerciseList1: ['Abs', 'Legs', 'Push up', 'Abs', 'Legs'],

      exerciseName2: 'Routine 2', // Define los valores deseados aquí
      exerciseUser2: 'User 2',
      exerciseRate2: 5,
      exerciseDif2: 2,
      exerciseList2: ['Abs', 'Legs', 'Push up'],

      exerciseName3: 'Routine 3', // Define los valores deseados aquí
      exerciseUser3: 'User 3',
      exerciseRate3: 2,
      exerciseDif3: 5,
      exerciseList3: ['Abs', 'Legs', 'Push up', 'Abs', 'Legs', 'Abs', 'Legs'],
    };
  },
  components: {
    Exercise,
  }
  // Resto de tu lógica de componente aquí
};
</script>