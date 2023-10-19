<template>
  <v-btn variant="tonal" color="primary" block
    >Details
    <v-dialog v-model="dialog" activator="parent" width="800">
      <v-card min-width="800" min-height="400" class="rounded-lg">
        <v-card-title class="text-h5 text-primary mt-4 ml-4"
          >Detalles de la rutina</v-card-title
        >
        <v-card-text>
          <v-row>
            <v-col
              v-for="(cycle, index) in cycles"
              :key="index"
              cols="4"
              no-gutters
            >
              <v-list>
                <v-list-subheader color="secondary">
                  {{ cycle.name }}
                </v-list-subheader>
                <v-divider></v-divider>
                <v-list-item
                  min-height="20"
                  class="list-item px-0"
                  v-for="(exercise, exerciseIdx) in cycle.exercises"
                  :key="exerciseIdx"
                  color="primary"
                  :selectable="false"
                >
                  <div class="d-flex align-items-center item">
                    <v-icon color="grey">mdi-dumbbell</v-icon>
                    <v-list-item-title
                      class="ml-2 icon-info"
                      v-text="exercise.exercise.name"
                    ></v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-icon color="grey">mdi-clock</v-icon>
                    <v-list-item-title class="ml-2 icon-info">
                      <span v-if="exercise.repetitions != 0"
                        >{{ exercise.repetitions }} reps / </span
                      >{{ exercise.duration }}s
                    </v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-col cols="3">
            <v-btn
              variant="tonal"
              color="primary"
              prepend-icon="mdi-pencil"
              block
              >Editar</v-btn
            ></v-col
          >
          <v-col cols="3">
            <v-btn
              variant="tonal"
              color="red-lighten-1"
              prepend-icon="mdi-delete"
              block
            >
              Borrar
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3" align="end" justify="end">
            <v-btn variant="tonal" color="primary" @click="dialog = false"
              >Cerrar</v-btn
            >
          </v-col>
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
