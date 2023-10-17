<template>
  <div class="bg-contrast flex-column pt-4 pb-16">
    <v-sheet class="mx-auto bg-contrast" max-width="800">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <h1 class="text-center mt-4 mb-8">Create your own routine!</h1>
        <v-alert
          v-if="error"
          color="error"
          class="mb-6 rounded-lg"
          icon="$error"
        >
          <v-alert-title>{{ error.description }}</v-alert-title>
          <ul>
            <li v-for="detail in error.details">
              {{ detail }}
            </li>
          </ul>
        </v-alert>

        <v-sheet class="elevation-6 rounded-lg">
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

        <v-sheet class="mt-8 elevation-6 rounded-lg">
          <v-container class="bg-primary rounded-t-lg">
            <h3>Now add your exercises</h3>
          </v-container>
          <v-container class="px-8">
            <v-expansion-panels
              class="mt-4 mb-8"
              variant="accordion"
              v-if="cycles.length"
            >
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
                          <v-btn
                            @click="deleteExercise(cycleIdx, exerciseIdx)"
                            density="comfortable"
                            color="red-lighten-1"
                            variant="tonal"
                            icon="mdi-delete"
                          >
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-row class="mt-2" no-gutters>
                    <v-col class="mr-1">
                      <v-btn color="primary" variant="tonal" block
                        >Add an exercise
                        <v-dialog
                          v-model="dialog"
                          activator="parent"
                          width="600"
                        >
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
                                      type="number"
                                      label="Repetitions"
                                      :rules="exerciseRules"
                                      class="mt-4"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col>
                                    <v-text-field
                                      v-model="exerciseTime"
                                      type="number"
                                      label="Time (in seconds)"
                                      :rules="exerciseRules"
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
                    </v-col>
                    <v-col class="ml-1">
                      <v-btn variant="tonal" color="primary" block
                        >Search an exercise</v-btn
                      >
                    </v-col>
                  </v-row>
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
                <v-text-field v-model="cycleReps" type="number" label="Repetitions">
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn block color="primary" variant="tonal" @click="addCycle"
              >Add cycle</v-btn
            >
          </v-container>
        </v-sheet>

        <v-sheet class="mt-8 bg-contrast">
          <v-btn type="submit" color="primary" class="rounded-xl" block
            >Save your changes</v-btn
          >
        </v-sheet>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
import { Cycle } from "@/api/cycle";
import { CycleExercise } from "@/api/cycleExercise";
import { Exercise } from "@/api/exercise";
import { Routine } from "@/api/routine";
import { mapActions } from "pinia";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";
import { useCycleStore } from "@/stores/CycleStore";
import { useExerciseStore } from "@/stores/ExerciseStore";
import { useRoutineStore } from "@/stores/RoutineStore";
import { router } from "@/router";

export default {
  data: () => ({
    error: null,
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
    difficulty: 0,
    difficultyLabels: {
      1: "Very easy",
      2: "Easy",
      3: "Moderate",
      4: "Hard",
      5: "Really hard",
    },
    difficultyEnum: [
      "rookie",
      "beginner",
      "intermediate",
      "advanced",
      "expert",
    ],

    dialog: false,

    exerciseName: "",
    exerciseReps: "",
    exerciseTime: "",
    exerciseOnlyTime: false,

    exerciseRules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
      (value) => {
        if (value > 0) return true;
        return "This field cannot be less or equal than 0.";
      },
    ],

    cycleName: "",
    cycleReps: "",
    cycles: [],
  }),
  methods: {
    ...mapActions(useRoutineStore, {
      $createRoutine: "create",
    }),
    ...mapActions(useCycleStore, {
      $createCycle: "create",
    }),
    ...mapActions(useExerciseStore, {
      $createExercise: "create",
    }),
    ...mapActions(useCycleExerciseStore, {
      $createCycleExercise: "create",
    }),

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
        reps: this.exerciseOnlyTime ? "0" : this.exerciseReps,
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

    async submit(event) {
      const result = await event;
      if (!result.valid) return;

      try {
        let routine = new Routine(
          this.title,
          "",
          true,
          this.difficultyEnum[this.difficulty],
        );
        routine = await this.$createRoutine(routine);

        this.cycles.forEach(async (cycleData, index) => {
          try {
            let cycle = new Cycle(
              cycleData.name,
              "",
              "exercise",
              index + 1,
              parseInt(cycleData.reps),
            );
            cycle = await this.$createCycle(routine.id, cycle);

            cycleData.exercises.forEach(async (exerciseData, index) => {
              try {
                let exercise = new Exercise(exerciseData.name, "", "exercise");
                exercise = await this.$createExercise(exercise);

                let cycleExercise = new CycleExercise(
                  index + 1,
                  parseInt(exerciseData.time),
                  parseInt(exerciseData.reps),
                );
                await this.$createCycleExercise(
                  cycle.id,
                  exercise.id,
                  cycleExercise,
                );
              } catch (e) {
                this.error = e;
                valid = false;
              }
            });
          } catch (e) {
            this.error = e;
            valid = false;
          }
        });
      } catch (e) {
        this.error = e;
      }
    },
  },
  components: {
    RoutineCard,
  },
};
</script>
