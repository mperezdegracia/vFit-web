<template>
  <v-list nav class="bg-primary rounded-lg elevation-6">
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
    <v-list-item
      class="d-md-none"
      prepend-icon="mdi-cog"
      title="Ajustes"
      value="settings"
      to="/settings"
    />
  </v-list>
</template>
