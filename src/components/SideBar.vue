<template>
  <v-sheet class="elevation-6 rounded-lg">
    <v-layout>
      <v-navigation-drawer
        class="bg-primary rounded-lg"
        permanent
        width="10000"
      >
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Inicio"
            value="home"
            to="/home"
          />
          <v-list-item
            prepend-icon="mdi-weight-lifter"
            title="Mis Rutinas"
            value="my_routines"
            to="/my-routines"
          />
          <v-list-item
            prepend-icon="mdi-heart"
            title="Favoritas"
            value="liked"
            to="/liked-routines"
          />
          <v-list-item
            prepend-icon="mdi-dumbbell"
            title="Mis Ejercicios"
            value="exercises"
            to="/exercises"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 225px"></v-main>
    </v-layout>
  </v-sheet>
</template>
