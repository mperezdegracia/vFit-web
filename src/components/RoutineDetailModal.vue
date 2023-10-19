<template>
  <v-btn variant="tonal" color="primary" block>Details
    <v-dialog v-model="dialog" activator="parent" width="800">
      <v-card min-width="800" min-height="400" class="rounded-lg">
        <v-card-title class="text-h5 text-primary mt-4 ml-4">Detalles de la rutina</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(cycle, index) in cycles" :key="index" cols="4" no-gutters>
              <v-list>
                <v-list-subheader color="secondary">
                  {{ cycle.name }}
                </v-list-subheader>
                <v-divider></v-divider>
                <v-list-item min-height="20" class="list-item px-0" v-for="(item, i) in cycle.items" :key="i"
                  color="primary" :selectable="false">
                  <div class="d-flex align-items-center item">
                    <v-icon color="grey">mdi-dumbbell</v-icon>
                    <v-list-item-title class="ml-2 icon-info" v-text="item.name"></v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-icon color="grey">mdi-clock</v-icon>
                    <v-list-item-title v-if="item.duration" class="ml-2 icon-info"
                      v-text="item.duration + '\''"></v-list-item-title>


                  </div>
                </v-list-item>
              </v-list>

            </v-col>
          </v-row>
        </v-card-text>
        <!-- <v-card-text>
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
        </v-card-text> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="secondary">Edit</v-btn>
          <v-btn variant="tonal" color="primary" @click="dialog = false">Close</v-btn>
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
