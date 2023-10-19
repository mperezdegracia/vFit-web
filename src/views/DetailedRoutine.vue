<template>
  <div
    class="bg-contrast min h-screen d-flex flex-column justify-center align-center"
  >
    <h1>{{ routine }}</h1>
    <v-container class="px-16">
      <v-expansion-panels class="my-4">
        <v-expansion-panel
          v-for="(stage, stageIdx) in stages"
          :key="stageIdx"
          :expanded="allPanelsExpanded"
          style="margin-bottom: 5px"
        >
          <v-expansion-panel-title class="bg-primary">
            <b style="padding-right: 20px">{{ stage.name }} </b> -
            <i style="margin-left: 20px">
              ({{ stage.reps }} reps x
              {{ stage.exercises.length }} exercises)</i
            >
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left" style="width: 50%">Nombre</th>
                  <th class="text-left" style="width: 45%">
                    Repeticiones/Tiempo
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(exercise, exerciseIdx) in stage.exercises"
                  :key="exerciseIdx"
                >
                  <td>{{ exercise.name }}</td>
                  <td v-if="exercise.reps && exercise.time">
                    {{ exercise.reps }} repeticiones/{{ exercise.time }} secs
                  </td>
                  <td v-else-if="exercise.reps">
                    {{ exercise.reps }} repeticiones
                  </td>
                  <td v-else>{{ exercise.time }} secs</td>
                </tr>
              </tbody>
            </v-table>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    allPanelsExpanded: true,
    routine: "My routine",
    stages: [
      {
        name: "Entrada en calor",
        reps: 3,
        exercises: [
          {
            name: "Abdominales",
            time: 60,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
        ],
      },
      {
        name: "Ciclo 1",
        reps: 6,
        exercises: [
          {
            name: "Abdominales",
            time: 60,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
        ],
      },
      {
        name: "Ciclo 2",
        reps: 1,
        exercises: [
          {
            name: "Abdominales",
            time: 60,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
        ],
      },
      {
        name: "Ciclo 3",
        reps: 2,
        exercises: [
          {
            name: "Abdominales",
            time: 60,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
        ],
      },
      {
        name: "Elongacion",
        reps: 1,
        exercises: [
          {
            name: "Abdominales",
            time: 60,
          },
          {
            name: "Press de banca",
            reps: 8,
          },
          {
            name: "Sentadillas",
            reps: 3,
            time: 45,
          },
        ],
      },
    ],
  }),
};
</script>
