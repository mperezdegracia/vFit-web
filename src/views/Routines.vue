<template>
  <div class="bg-contrast min h-screen d-flex flex-column justify-start align-center">
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

          <v-row class="justify-center">
            <v-col v-for="(routine_, index) in routines" :key="index" md="4" sm="12">
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



<script default>
import RoutineCard from '@/components/RoutineCard.vue';

export default {
  data() {
    return {
      routines: [
        {
          name: 'Routine 1',
          user: 'User 1',
          rate: 4,
          dif: 3,
          reviews: 10,
          tags: ['Abs', 'Upper Body'],
          image: "src/assets/routine.png",
          cycles: [
            {
              name: 'Warm-up',
              items: [
                {
                  name: 'Jumping jacks',
                  duration: 30,
                },
                {
                  name: 'High knees',
                  duration: 30,
                },
                {
                  name: 'Butt kicks',
                  duration: 30,
                },
              ],
            },
            {
              name: 'Cycle 1',
              items: [
                {
                  name: 'Squats',
                  duration: 60,
                },
                {
                  name: 'Lunges',
                  duration: 60,
                },
                {
                  name: 'Push ups',
                  duration: 60,
                },
              ],
            },
            {
              name: 'Cycle 2',
              items: [
                {
                  name: 'Crunches',
                  duration: 30,
                },
                {
                  name: 'Plank',
                  duration: 30,
                },
                {
                  name: 'Leg raises',
                  duration: 30,
                },
              ],
            },
            {
              name: 'Cool-down',
              items: [
                {
                  name: 'Stretching',
                  duration: 60,
                },
              ],
            },
          ],
        },
        {
          name: 'Routine 2',
          user: 'User 2',
          rate: 5,
          dif: 2,
          reviews: 70,

          tags: ['Abs', 'Upper Body'],
          image: "src/assets/routine.png",

          cycles: [
            {
              name: 'Warm-up',
              items: [
                {
                  name: 'Jumping jacks',
                  duration: 30,
                },
                {
                  name: 'High knees',
                  duration: 30,
                },
                {
                  name: 'Butt kicks',
                  duration: 30,
                },
              ],
            },
            {
              name: 'Cycle 1',
              items: [
                {
                  name: 'Squats',
                  duration: 60,
                },
                {
                  name: 'Lunges',
                  duration: 60,
                },
                {
                  name: 'Push ups',
                  duration: 60,
                },
              ],
            },
            {
              name: 'Cool-down',
              items: [
                {
                  name: 'Stretching',
                  duration: 60,
                },
              ],
            },
          ],
        },
        {
          name: 'Routine 3',
          user: 'User 3',
          rate: 2,
          dif: 5,
          reviews: 23,

          tags: ['Abs', 'Upper Body'],
          image: "src/assets/routine.png",

          cycles: [
            {
              name: 'Warm-up',
              items: [
                {
                  name: 'Jumping jacks',
                  duration: 30,
                },
                {
                  name: 'High knees',
                  duration: 30,
                },
                {
                  name: 'Butt kicks',
                  duration: 30,
                },
              ],
            },
            {
              name: 'Cycle 1',
              items: [
                {
                  name: 'Squats',
                  duration: 60,
                },
                {
                  name: 'Lunges',
                  duration: 60,
                },
                {
                  name: 'Push ups',
                  duration: 60,
                },
              ],
            },
            {
              name: 'Cycle 2',
              items: [
                {
                  name: 'Crunches',
                  duration: 30,
                },
                {
                  name: 'Plank',
                  duration: 30,
                },
                {
                  name: 'Leg raises',
                  duration: 30,
                },
              ],
            },
            {
              name: 'Cycle 3',
              items: [
                {
                  name: 'Squats',
                  duration: 60,
                },
                {
                  name: 'Lunges',
                  duration: 60,
                },
                {
                  name: 'Push ups',
                  duration: 60,
                },
              ],
            },
            {
              name: 'Cool-down',
              items: [
                {
                  name: 'Stretching',
                  duration: 60,
                },
              ],
            },
          ],
        },
      ]
      ,
    };
  },
  components: {
    RoutineCard,
  }
  // Resto de tu lógica de componente aquí
};
</script>