<template>
  <div class="bg-contrast flex-column pt-4 pb-16">
    <h1 class="text-center mt-4 mb-8">Create your own routine!</h1>
    <v-sheet class="mx-auto" max-width="800">
      <v-container class="bg-surface-variant">
        <h3>Describe us your routine</h3>
      </v-container>
      <v-container class="px-16">
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Routine Title"
          required
        >
        </v-text-field>

        <div class="mt-4">
          <div class="text-caption">Select the expected difficulty</div>
          <v-slider
            v-model="difficulty"
            :ticks="difficultyLabels"
            :min="1"
            :max="5"
            step="1"
            show-ticks="always"
            tick-size="4"
            color="primary"
          >
          </v-slider>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet class="mx-auto mt-8" max-width="800">
      <v-container class="bg-surface-variant">
        <h3>Now add your exercises</h3>
      </v-container>
      <v-container class="px-16">
        <v-expansion-panels class="my-4">
          <v-expansion-panel
            v-for="(stage, stageIdx) in stages"
            :key="stageIdx"
          >
            <v-expansion-panel-title class="bg-grey-lighten-2">{{
              stage.name
            }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left" style="width: 50%">Name</th>
                    <th class="text-left" style="width: 45%">Repetitions</th>
                    <th class="text-right" style="width: 5%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(exercise, exerciseIdx) in stage.exercises"
                    :key="exerciseIdx"
                  >
                    <td>{{ exercise.name }}</td>
                    <td>{{ exercise.reps }}</td>
                    <td class="text-right">
                      <v-icon
                        small
                        @click="deleteExercise(stageIdx, exerciseIdx)"
                        >mdi-delete</v-icon
                      >
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <v-btn class="mt-8" color="primary" variant="tonal" block
                >Add an exercise
                <v-dialog v-model="dialog" activator="parent" width="600">
                  <v-card title="Add an exercise" max-width="600">
                    <v-card-text>
                      <v-container>
                        <v-text-field
                          v-model="exerciseName"
                          label="Exercise name"
                          :rules="titleRules"
                        ></v-text-field>
                        <v-text-field
                          v-model="exerciseReps"
                          label="Repetitions"
                          :rules="exerciseRepsRules"
                          class="mt-4"
                        ></v-text-field>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" variant="tonal" @click="dialog = false"
                        >Cancel</v-btn
                      >
                      <v-btn color="primary" variant="tonal" @click="addExercise(stageIdx)"
                        >Add</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
              <v-btn
                variant="tonal"
                block
                color="red-lighten-1"
                class="mt-2"
                @click="deleteStage(stageIdx)"
                >Remove</v-btn
              >
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row class="mt-4">
          <v-col cols="9">
            <v-text-field
              v-model="stageName"
              label="Stage name"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-btn block color="primary" variant="tonal" @click="addStage">Add stage</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";

export default {
  data: () => ({
    title: "",
    titleRules: [
      (value) => {
        if (value) return true;
        return "Title is required.";
      },
      (value) => {
        if (value?.length <= 30) return true;
        return "Title must be less than 30 characters.";
      },
    ],
    difficulty: "",
    difficultyLabels: {
      1: "Very easy",
      2: "Easy",
      3: "Moderate",
      4: "Hard",
      5: "Really hard",
    },

    dialog: false,

    exerciseName: "",
    exerciseReps: "",
    exerciseRepsRules: [
      (value) => {
        if (value > 0) return true;
        return "Reps cannot be less or equal than 0.";
      },
    ],

    stageName: "",

    stages: [
      {
        name: "Hola",
        exercises: [
          {
            name: "Abdominales",
            reps: 6,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
          },
        ],
      },
    ],
  }),
  methods: {
    addStage() {
      if (this.stageName == "") return;
      this.stages.push({ name: this.stageName, exercises: [] });
      this.stageName = "";
    },
    deleteStage(stage) {
      this.stages.splice(stage, 1);
    },
    addExercise(stage) {
      this.stages[stage].exercises.push({
        name: this.exerciseName,
        reps: this.exerciseReps,
      });
      this.dialog = false;
      this.exerciseName = "";
      this.exerciseReps = "";
    },
    deleteExercise(stage, exercise) {
      this.stages[stage].exercises.splice(exercise, 1);
    },
  },
  components: {
    RoutineCard,
  },
};
</script>
