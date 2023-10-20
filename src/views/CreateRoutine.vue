<template>
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

      <v-btn
        @click="$router.go(-1)"
        variant="text"
        color="primary"
        prepend-icon="mdi-arrow-left"
        class="mb-4"
        >Volver a la página previa</v-btn
      >

      <v-sheet class="elevation-6 rounded-lg">
        <v-container class="bg-primary rounded-t-lg" fluid>
          <h2>Crea tu propia rutina</h2>
        </v-container>
        <v-container class="px-8">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre de la rutina"
            required
            class="my-4"
          >
          </v-text-field>
          <v-textarea
            v-model="detail"
            :rules="detailRules"
            :counter="200"
            label="Detalles"
          ></v-textarea>

          <div class="mt-4">
            <div class="text-caption">Selecciona la dificultad esperada</div>
            <v-slider
              v-model="difficulty"
              :ticks="difficultyLabels"
              :min="0"
              :max="4"
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
          <h2>Ahora agregá tus ciclos</h2>
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
              <v-expansion-panel-title class="bg-grey-lighten-3"
                >{{ cycle.name }} ({{ cycle.type }}) -
                <span class="font-weight-bold ml-1"
                  >{{ cycle.reps }} reps</span
                ></v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <v-container>
                  <v-card-subtitle class="text-center mb-4">
                    {{ cycle.detail }}
                  </v-card-subtitle></v-container
                >

                <v-table v-if="cycle.exercises.length" class="mb-6">
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
                      <td>{{ exercise.exercise.name }}</td>
                      <td>
                        <span v-if="exercise.reps"
                          >{{ exercise.reps }} reps / </span
                        >{{ exercise.duration }}s
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
                <v-row class="pt-4 pb-2">
                  <v-col cols="12" md="6" class="py-1">
                    <AddCycleExerciseModal
                      :cycleIdx="cycleIdx"
                      :addCycleExercise="addCycleExercise"
                  /></v-col>
                  <v-col class="py-1">
                    <v-btn
                      variant="tonal"
                      block
                      color="red-lighten-1"
                      @click="deleteCycle(cycleIdx)"
                      prepend-icon="mdi-delete"
                      >Quitar ciclo</v-btn
                    ></v-col
                  >
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-form validate-on="submit lazy" @submit.prevent="cycleSubmit">
            <v-row class="pt-4 pb-2">
              <v-col cols="12" md="4" class="py-1">
                <v-text-field
                  v-model="cycleName"
                  :rules="nameRules"
                  :counter="100"
                  label="Nombre del ciclo"
                >
                </v-text-field>
              </v-col>
              <v-col class="py-1">
                <v-text-field
                  v-model="cycleReps"
                  :rules="repsRules"
                  type="number"
                  label="Repeticiones"
                >
                </v-text-field>
              </v-col>
              <v-col class="py-1">
                <v-select
                  v-model="cycleType"
                  :items="['WarmUp', 'Exercise', 'CoolDown']"
                  :rules="typeRules"
                  label="Tipo"
                >
                </v-select>
              </v-col>
            </v-row>
            <v-textarea
              v-model="cycleDetail"
              :rules="detailRules"
              :counter="200"
              label="Detalles"
            ></v-textarea>
            <v-btn
              color="primary"
              variant="tonal"
              type="submit"
              prepend-icon="mdi-plus"
              block
              >Agregar ciclo</v-btn
            ></v-form
          >
        </v-container>
      </v-sheet>

      <v-alert
        v-if="cycles.length < 3"
        color="warning"
        class="mt-6 rounded-lg"
        icon="$warning"
      >
        <v-alert-title>Aviso</v-alert-title>
        Debe ingresar al menos tres ciclos diferentes para poder guardar la
        rutina.
      </v-alert>

      <v-btn
        type="submit"
        color="green-lighten-1"
        class="rounded-xl mt-6"
        :disabled="cycles.length < 3"
        :loading="loading"
        prepend-icon="mdi-content-save"
        block
        >Guardar rutina</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
import { Cycle } from "@/api/cycle";
import { CycleExercise } from "@/api/cycleExercise";
import { Routine } from "@/api/routine";
import { mapActions } from "pinia";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";
import { useCycleStore } from "@/stores/CycleStore";
import { useExerciseStore } from "@/stores/ExerciseStore";
import { useRoutineStore } from "@/stores/RoutineStore";
import { router } from "@/router";
import AddCycleExerciseModal from "@/components/AddCycleExerciseModal.vue";

export default {
  data: () => ({
    errors: [],
    loading: false,

    name: "",
    detail: "",
    difficulty: 0,
    difficultyLabels: {
      0: "Muy fácil",
      1: "Fácil",
      2: "Moderada",
      3: "Difícil",
      4: "Muy difícil",
    },
    difficultyEnum: [
      "rookie",
      "beginner",
      "intermediate",
      "advanced",
      "expert",
    ],

    cycleName: "",
    cycleReps: "",
    cycleType: null,
    cycleDetail: "",

    nameRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value?.length <= 100) return true;
        return "El campo tiene que tener menos de 100 caracteres.";
      },
    ],
    detailRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value?.length <= 200) return true;
        return "El campo tiene que tener menos de 200 caracteres.";
      },
    ],
    repsRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
      (value) => {
        if (value <= 999) return true;
        return "El valor máximo es 999.";
      },
    ],
    typeRules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],

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

    async cycleSubmit(event) {
      const result = await event;
      if (!result.valid) return;

      this.cycles.push({
        name: this.cycleName,
        reps: this.cycleReps,
        type: this.cycleType,
        detail: this.cycleDetail,
        exercises: [],
      });
      this.cycleName = "";
      this.cycleReps = "";
      this.cycleType = null;
      this.cycleDetail = "";
    },

    deleteCycle(index) {
      this.cycles.splice(index, 1);
    },

    addCycleExercise(cycleIdx, exercise, duration, reps) {
      this.cycles[cycleIdx].exercises.push({
        exercise,
        duration,
        reps,
      });
    },

    deleteExercise(cycleIdx, exerciseIdx) {
      this.cycles[cycleIdx].exercises.splice(exerciseIdx, 1);
    },

    async submit(event) {
      const result = await event;
      if (!result.valid) return;
      if (this.cycles.length < 3) return;
      this.errors = [];
      this.loading = true;

      try {
        const routine = await this.$createRoutine(
          new Routine(
            this.name,
            this.detail,
            true,
            this.difficultyEnum[this.difficulty]
          )
        );
        await Promise.all(
          this.cycles.map(async (cData, cIdx) => {
            try {
              const cycle = await this.$createCycle(
                routine.id,
                new Cycle(
                  cData.name,
                  cData.detail,
                  cData.type.toLowerCase(),
                  cIdx + 1,
                  parseInt(cData.reps)
                )
              );
              await Promise.all(
                cData.exercises.map(async (eData, eIdx) => {
                  try {
                    await this.$createCycleExercise(
                      cycle.id,
                      eData.exercise.id,
                      new CycleExercise(
                        eIdx + 1,
                        parseInt(eData.duration),
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
      this.loading = false;
    },
  },
  components: { AddCycleExerciseModal },
};
</script>
