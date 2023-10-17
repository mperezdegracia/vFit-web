<template>
  <v-sheet class="elevation-6">
    <v-layout>
      <v-navigation-drawer class="bg-primary" permanent width="10000">
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
            to="/liked-routines"
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
</template>
