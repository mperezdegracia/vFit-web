<template>
  <div class="bg-contrast flex-column pt-4 pb-16">
    <h1 class="text-center mt-4 mb-8">Create your own routine!</h1>
    <v-sheet class="mx-auto elevation-6 rounded-lg" max-width="800">
      <v-container class="bg-primary rounded-t-lg">
        <h3>Describe us your routine</h3>
      </v-container>
      <v-container class="px-8">
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Routine Title"
          required
          class="my-4"
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
    <v-sheet class="mx-auto mt-8 elevation-6 rounded-lg" max-width="800">
      <v-container class="bg-primary rounded-t-lg">
        <h3>Now add your exercises</h3>
      </v-container>
      <v-container class="px-8">
        <v-expansion-panels class="mt-4 mb-8" variant="accordion" v-if="cycles.length">
          <v-expansion-panel
            v-for="(cycle, cycleIdx) in cycles"
            :key="cycleIdx"
          >
            <v-expansion-panel-title class="bg-grey-lighten-2"
              >{{ cycle.name }} -
              <span class="font-weight-bold ml-1"
                >{{ cycle.reps }} reps</span
              ></v-expansion-panel-title
            >
            <v-expansion-panel-text>
              <v-table v-if="cycle.exercises.length" class="mb-4">
                <thead>
                  <tr>
                    <th class="text-left" style="width: 50%">Name</th>
                    <th class="text-left" style="width: 45%">Reps/time</th>
                    <th class="text-right" style="width: 5%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(exercise, exerciseIdx) in cycle.exercises"
                    :key="exerciseIdx"
                  >
                    <td>{{ exercise.name }}</td>
                    <td>
                      <span v-if="exercise.reps"
                        >{{ exercise.reps }} reps / </span
                      >{{ exercise.time }}s
                    </td>
                    <td class="text-right">
                      <v-icon
                        small
                        @click="deleteExercise(cycleIdx, exerciseIdx)"
                        >mdi-delete</v-icon
                      >
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <v-btn class="mt-2" color="primary" variant="tonal" block
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
                        <v-row>
                          <v-col v-if="!exerciseOnlyTime">
                            <v-text-field
                              v-model="exerciseReps"
                              label="Repetitions"
                              :rules="exerciseRepsRules"
                              class="mt-4"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-text-field
                              v-model="exerciseTime"
                              label="Time (in seconds)"
                              :rules="exerciseTimeRules"
                              class="mt-4"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-checkbox
                          v-model="exerciseOnlyTime"
                          color="primary"
                          label="Only time specified"
                        ></v-checkbox>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        variant="tonal"
                        @click="dialog = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="primary"
                        variant="tonal"
                        @click="addExercise(cycleIdx)"
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
                @click="deleteCycle(cycleIdx)"
                >Remove cycle</v-btn
              >
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row>
          <v-col>
            <v-text-field v-model="cycleName" label="Cycle name">
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="cycleReps" label="Repetitions">
            </v-text-field>
          </v-col>
        </v-row>
        <v-btn block color="primary" variant="tonal" @click="addCycle"
          >Add cycle</v-btn
        >
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
        return "This field is required.";
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
        if (value) return true;
        return "This field is required.";
      },
      (value) => {
        if (value > 0) return true;
        return "Reps cannot be less or equal than 0.";
      },
    ],
    exerciseTime: "",
    exerciseTimeRules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
      (value) => {
        if (value > 0) return true;
        return "Time cannot be less or equal than 0.";
      },
    ],
    exerciseOnlyTime: false,

    cycleName: "",
    cycleReps: "",

    cycles: [
      {
        name: "Ciclo de ejercitación A",
        reps: 2,
        exercises: [
          {
            name: "Flexiones de brazos",
            reps: 20,
            time: 60,
          },
          {
            name: "Descanso",
            time: 60,
          },
          {
            name: "Abdominales",
            reps: 15,
            time: 50,
          },
          {
            name: "Descanso",
            time: 40,
          },
        ],
      },
      {
        name: "Ciclo de ejercitación B (opcional)",
        reps: 3,
        exercises: [
          {
            name: "Jumping jacks",
            time: 30,
          },
          {
            name: "Descanso",
            time: 60,
          },
        ],
      },
      {
        name: "Ciclo de enfriamiento",
        reps: 4,
        exercises: [
          {
            name: "Estirar hombros",
            time: 60,
          },
          {
            name: "Estirar piernas",
            time: 40,
          },
        ],
      },
    ],
  }),
  methods: {
    addCycle() {
      if (this.cycleName == "" || this.cycleReps == "") return;
      this.cycles.push({
        name: this.cycleName,
        reps: this.cycleReps,
        exercises: [],
      });
      this.cycleName = "";
      this.cycleReps = "";
    },
    deleteCycle(cycle) {
      this.cycles.splice(cycle, 1);
    },
    addExercise(cycle) {
      if (
        this.exerciseName == "" ||
        this.exerciseTime == "" ||
        (this.exerciseReps == "" && this.exerciseOnlyTime == false)
      )
        return;
      this.cycles[cycle].exercises.push({
        name: this.exerciseName,
        reps: this.exerciseReps,
        time: this.exerciseTime,
      });
      this.dialog = false;
      this.exerciseName = "";
      this.exerciseReps = "";
      this.exerciseTime = "";
      this.exerciseOnlyTime = false;
    },
    deleteExercise(cycle, exercise) {
      this.cycles[cycle].exercises.splice(exercise, 1);
    },
  },
  components: {
    RoutineCard,
  },
};
</script>
