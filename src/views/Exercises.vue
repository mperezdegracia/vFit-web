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
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="10" align="center" justify="center">
        <h1 class="title mb-5">Exercises</h1>
        <v-row class="d-flex" align="center" justify="center">
          <v-col v-for="(exercise, index) in exercises" :key="index" cols="4">
            <v-card variant="outlined" elevation="4">
              <v-card-title>{{ exercise.name }}</v-card-title>
              <v-img :width="300" :src="exercise.image" />
            </v-card>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <v-dialog v-model="dialog" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"> Add exercise </v-btn>
              </template>
              <v-card>
                <v-card-title class="ma-2">
                  <span class="title text-h5">Add exercise</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field label="Name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Description*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-autocomplete
                          :items="[
                            'Upper Body',
                            'Lower Body',
                            'Chest',
                            'Back',
                            'Abdominals',
                            'Cardio',
                            'Arms',
                            'Biceps',
                            'Triceps',
                            'Shoulder',
                            'Latissimus dorsi (lats)',
                            'Legs',
                            'Hamstrings',
                            'Calves',
                            'Quadriceps',
                            'Glutes',
                            'Forearms',
                            'Trapezius (traps)',
                          ]"
                          label="Tags*"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" variant="text" @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="primary" variant="text" @click="dialog = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
  data: () => ({
    dialog: false,
  }),
};
</script>
