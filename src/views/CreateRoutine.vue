<template>
  <div class="bg-contrast flex-column pt-4 pb-16 h-100">
    <v-sheet class="mx-auto bg-contrast" max-width="800">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-alert
          v-if="errors.length"
          v-for="error in errors"
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
          <v-container class="bg-primary rounded-t-lg" fluid>
            <h2>Crea tu propia rutina</h2>
          </v-container>
          <v-container class="px-8">
            <v-text-field
              v-model="title"
              :rules="titleRules"
              label="Título de rutina"
              required
              class="my-4"
            >
            </v-text-field>

            <div class="mt-4">
              <div class="text-caption">Selecciona la dificultad esperada</div>
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
          <v-container class="bg-primary rounded-t-lg" fluid>
            <h2>Ahora agrega tus ejercicios</h2>
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
                        <th class="text-left" style="width: 50%">Nombre</th>
                        <th class="text-left" style="width: 45%">
                          Repeticiones/Tiempo
                        </th>
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
                            >{{ exercise.reps }} repeticiones / </span
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
                        >Agregar un ejercicio
                        <v-dialog
                          v-model="dialog"
                          activator="parent"
                          width="600"
                        >
                          <v-card title="Añade un ejercicio" max-width="600">
                            <v-card-text>
                              <v-container>
                                <v-text-field
                                  v-model="exerciseName"
                                  label="Nombre del ejercicio"
                                  :rules="titleRules"
                                ></v-text-field>
                                <v-row>
                                  <v-col v-if="!exerciseOnlyTime">
                                    <v-text-field
                                      v-model="exerciseReps"
                                      type="number"
                                      label="Repeticiones"
                                      :rules="exerciseRules"
                                      class="mt-4"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col>
                                    <v-text-field
                                      v-model="exerciseTime"
                                      type="number"
                                      label="Tiempo (en segundos)"
                                      :rules="exerciseRules"
                                      class="mt-4"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-checkbox
                                  v-model="exerciseOnlyTime"
                                  color="primary"
                                  label="Sólo tiempo especificado"
                                ></v-checkbox>
                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="primary"
                                variant="tonal"
                                @click="closeDialog(cleanExercise)"
                                >Cancelar</v-btn
                              >
                              <v-btn
                                color="primary"
                                variant="tonal"
                                @click="addExercise(cycleIdx)"
                                >Agregar</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-btn>
                    </v-col>
                    <v-col class="ml-1">
                      <v-btn variant="tonal" color="primary" block
                        >Buscar un ejercicio</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-btn
                    variant="tonal"
                    block
                    color="red-lighten-1"
                    class="mt-2"
                    @click="deleteCycle(cycleIdx)"
                    >Quitar ciclo</v-btn
                  >
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-row>
              <v-col>
                <v-text-field v-model="cycleName" label="Nombre del ciclo">
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="cycleReps"
                  type="number"
                  label="Repeticiones"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn block color="primary" variant="tonal" @click="addCycle"
              >Agregar ciclo</v-btn
            >
          </v-container>
        </v-sheet>

        <v-sheet class="mt-8 bg-contrast">
          <v-btn type="submit" color="primary" class="rounded-xl" block
            >Guarda tus cambios</v-btn
          >
        </v-sheet>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
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
    errors: [],
    dialog: false,

    title: "",
    titleRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value?.length <= 30) return true;
        return "El título debe tener menos de 30 caracteres.";
      },
    ],
    difficulty: 1,
    difficultyLabels: {
      1: "Muy fácil",
      2: "Fácil",
      3: "Moderada",
      4: "Difícil",
      5: "Muy difícil",
    },
    difficultyEnum: [
      "rookie",
      "beginner",
      "intermediate",
      "advanced",
      "expert",
    ],

    exerciseName: "",
    exerciseReps: "",
    exerciseTime: "",
    exerciseOnlyTime: false,

    exerciseRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value > 0) return true;
        return "Este campo no puede ser menor o igual que 0.";
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
      $getExercise: "getAll",
    }),
    ...mapActions(useCycleExerciseStore, {
      $createCycleExercise: "create",
    }),

    closeDialog(fn) {
      this.dialog = false;
      fn();
    },

    addCycle() {
      if (this.cycleName == "" || this.cycleReps == "") return;
      this.cycles.push({
        name: this.cycleName,
        reps: this.cycleReps,
        exercises: [],
      });
      this.cleanCycle();
    },

    cleanCycle() {
      this.cycleName = "";
      this.cycleReps = "";
    },

    deleteCycle(index) {
      this.cycles.splice(index, 1);
    },

    async addExercise(cycle) {
      if (
        this.exerciseName == "" ||
        this.exerciseTime == "" ||
        (this.exerciseReps == "" && this.exerciseOnlyTime == false)
      )
        return;

      if (await this.checkExercise(this.exerciseName)) return;

      this.cycles[cycle].exercises.push({
        name: this.exerciseName,
        reps: this.exerciseOnlyTime ? "0" : this.exerciseReps,
        time: this.exerciseTime,
      });

      this.closeDialog(this.cleanExercise);
    },

    cleanExercise() {
      this.exerciseName = "";
      this.exerciseReps = "";
      this.exerciseTime = "";
      this.exerciseOnlyTime = false;
    },

    deleteExercise(cycleIdx, exerciseIdx) {
      this.cycles[cycleIdx].exercises.splice(exerciseIdx, 1);
    },

    async checkExercise(name) {
      const result = await this.$getExercise({ search: name });
      return result.totalCount != 0;
    },

    async submit(event) {
      const result = await event;
      if (!result.valid) return;
      this.errors = [];

      try {
        const routine = await this.$createRoutine(
          new Routine(
            this.title,
            "",
            true,
            this.difficultyEnum[this.difficulty - 1]
          )
        );

        await Promise.all(
          this.cycles.map(async (cData, cIdx) => {
            try {
              const cycle = await this.$createCycle(
                routine.id,
                new Cycle(
                  cData.name,
                  "",
                  "exercise",
                  cIdx + 1,
                  parseInt(cData.reps)
                )
              );

              await Promise.all(
                cData.exercises.map(async (eData, eIdx) => {
                  try {
                    const exercise = await this.$createExercise(
                      new Exercise(eData.name, "", "exercise")
                    );

                    await this.$createCycleExercise(
                      cycle.id,
                      exercise.id,
                      new CycleExercise(
                        eIdx + 1,
                        parseInt(eData.time),
                        parseInt(eData.reps)
                      )
                    );
                  } catch (e) {
                    this.errors.push(e);
                  }
                })
              );
            } catch (e) {
              this.errors.push(e);
            }
          })
        );

        if (this.errors.length == 0) router.push("/my-routines");
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>
