<template>
  <v-btn variant="tonal" color="primary" block
    >Details
    <v-dialog v-model="dialog" activator="parent" width="600">
      <v-card title="Routine details" max-width="600">
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
                  >{{ cycle.repetitions }} reps</span
                >
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table v-if="cycle.exercises.length" class="mb-4">
                  <thead>
                    <tr>
                      <th style="width: 50%">Name</th>
                      <th style="width: 50%">Reps/time</th>
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
                          >{{ exercise.repetitions }} reps / </span
                        >{{ exercise.duration }}s
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <div class="text-center" v-else>
                  No exercises where registered
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="primary" @click="dialog = false"
            >Close</v-btn
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
