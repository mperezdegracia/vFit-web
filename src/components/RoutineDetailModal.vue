<template>
  <v-btn variant="tonal" color="primary" block
    >Detalles
    <v-dialog v-model="dialog" activator="parent" width="600">
      <v-card max-width="600">
        <v-card-title class="text-h5 text-primary mt-4 ml-4"
          >Detalles de la rutina</v-card-title
        >
        <v-card-text>
          <v-expansion-panels
            class="mt-4 mb-8"
            variant="accordion"
            v-if="cycles.length"
          >
            <v-expansion-panel
              v-for="(cycle, cycleIdx) in cycles"
              :key="cycleIdx"
            >
              <v-expansion-panel-title class="bg-grey-lighten-2">
                {{ cycle.name }} -
                <span class="font-weight-bold ml-1"
                  >{{ cycle.repetitions }} Repeticiones</span
                >
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table v-if="cycle.exercises.length" class="mb-4">
                  <thead>
                    <tr>
                      <th style="width: 50%">Nombre</th>
                      <th style="width: 50%">Repeticions/Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(exercise, exerciseIdx) in cycle.exercises"
                      :key="exerciseIdx"
                    >
                      <td>{{ exercise.exercise.name }}</td>
                      <td>
                        <span v-if="exercise.repetitions != 0"
                          >{{ exercise.repetitions }} repeticiones / </span
                        >{{ exercise.duration }}segundos
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <div class="text-center" v-else>
                  No se registro ningun ejercicio
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="primary" @click="dialog = false"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    cycles: {
      required: true,
    },
  },
};
</script>
