<template>
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
                />
                <v-list-item
                  prepend-icon="mdi-weight-lifter"
                  title="My Routines"
                  value="my_routines"
                />
                <v-list-item
                  prepend-icon="mdi-heart"
                  title="Liked"
                  value="liked"
                />
                <v-list-item
                  prepend-icon="mdi-dumbbell"
                  title="Exercises"
                  value="exercises"
                />
              </v-list>
            </v-navigation-drawer>
            <v-main style="height: 225px"></v-main>
          </v-layout>
        </v-sheet>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="10" align="center" justify="center">
        <h1 class="title">Exercises</h1>
        <v-row class="d-flex" align="center" justify="center">
          <v-col v-for="(exercise, index) in exercises" :key="index" cols="4">
            <v-card variant="outlined" elevation="4">
              <v-card-title>{{ exercise.name }}</v-card-title>
              <v-img :width="300" :src="exercise.image" />
            </v-card>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <v-btn color="primary" class="ma-4"> Add exercise </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.title {
  font-size: 50px;
  color: blueviolet;
}
</style>

<script>
import { ref } from "vue";
import { exercises } from "@/data/exercises.js";

export default {
  setup() {
    const exercisesData = ref(exercises);

    return {
      exercises: exercisesData,
    };
  },
};
</script>
