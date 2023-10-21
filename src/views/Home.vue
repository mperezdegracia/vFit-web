<template>
  <v-row>
    <v-col cols="12" md="2">
      <SideBar />
      <v-card class="rounded-lg elevation-6 mt-4" v-if="searching">
        <v-card-item align="center" justify="center">
          <v-card-title
            >Filtros
            <v-icon>mdi-filter</v-icon>
          </v-card-title>
        </v-card-item>
        <v-divider />

        <v-card-text>
          <span class="font-weight-bold">Dificultad: </span>
          <v-chip
            class="ma-1"
            v-for="difFilter in difFilters"
            :key="difFilter.value"
            :class="{ 'bg-primary': difficultyFilter === difFilter.value }"
            @click="filterByDifficulty(difFilter)"
          >
            {{ difFilter.text }}
          </v-chip>
        </v-card-text>

        <v-card-text class="mr-1">
          <span class="font-weight-bold">Puntuación: </span>
          <v-chip
            class="ma-1"
            v-for="ratFilter in ratFilters"
            :key="ratFilter.value"
            :class="{ 'bg-primary': scoreFilter === ratFilter.value }"
            @click="filterByScore(ratFilter)"
          >
            {{ ratFilter.text }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col>
      <v-row align="center" justify="center" class="ma-3">
        <h1 class="text-h2 text-primary text-center font-weight-bold mr-4">
          ¡Bienvenido!
        </h1>
      </v-row>

      <v-sheet class="bg-contrast mt-5" align="center" justify="center">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-responsive max-width="700" class="pa-3">
            <v-text-field
              v-model="search"
              label="Buscar..."
              variant="solo"
              rounded
              :rules="searchRules"
              prepend-inner-icon="-"
            >
              <template #append>
                <v-btn
                  type="submit"
                  icon="mdi-magnify"
                  :loading="searchLoading"
                />
                <div v-if="searching">
                  <v-menu>
                    <template v-slot:activator="{ props: menu }">
                      <v-tooltip location="top">
                        <template v-slot:activator="{ props: tooltip }">
                          <v-btn
                            class="ml-4"
                            color="primary"
                            icon="mdi-order-bool-descending"
                            v-bind="mergeProps(menu, tooltip)"
                            :loading="orderLoading"
                          >
                          </v-btn>
                        </template>
                        <span>Ordenar por</span>
                      </v-tooltip>
                    </template>

                    <v-list>
                      <v-list-item
                        v-for="(item, index) in orderByItems"
                        :key="index"
                        @click="orderBy(item)"
                        :disabled="item.id == orderByCriteria"
                      >
                        <v-list-item-title>
                          <v-icon
                            :icon="
                              item.dir == 'asc'
                                ? 'mdi-menu-up'
                                : 'mdi-menu-down'
                            "
                            class="mr-2"
                          ></v-icon>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-btn
                    icon="mdi-delete-sweep"
                    color="red"
                    class="ml-4"
                    @click="clearSearch()"
                  ></v-btn>
                </div>
              </template>
            </v-text-field>
          </v-responsive>
        </v-form>
      </v-sheet>

      <div v-if="!searching">
        <v-row align="center" justify="center">
          <v-col lg="3" md="4" sm="6" align="center" justify="center">
            <v-card class="rounded-xl elevation-4 ma-2 pb-3" to="/my-routines">
              <v-img :width="250" :height="250" cover src="/home0.svg" />
              <p class="text-h5">¡Mire sus rutinas!</p>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" align="center" justify="center">
            <v-card class="rounded-xl elevation-4 ma-2 pb-3" to="/exercises">
              <v-img :width="250" :height="250" cover src="/home1.svg" />
              <p class="text-h5">¡Mire sus ejercicios!</p>
            </v-card>
          </v-col>

          <v-col lg="3" md="4" sm="6" align="center" justify="center">
            <v-card
              class="rounded-xl elevation-4 ma-2 pb-3"
              to="/routine/create"
            >
              <v-img :width="250" :height="250" cover src="/home2.svg" />
              <p class="text-h5">¡Crea tu rutina!</p>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col>
            <h1
              v-if="searchText.length != 0"
              class="font-weight-medium text-primary text-center texto"
            >
              Resultados para "{{ searchText }}"
            </h1>

            <h1
              v-else
              class="font-weight-medium text-primary text-center texto"
            >
              Todas las rutinas
            </h1>
          </v-col>
          <v-divider class="mb-4 mx-6"></v-divider>
        </v-row>
        <RoutineGrid :result="result" :getAllRoutines="getRoutinesSearch" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import RoutineScroll from "@/components/RoutineScroll.vue";
import RoutineGrid from "@/components/RoutineGrid.vue";
import SideBar from "@/components/SideBar.vue";
import { mergeProps } from "vue";
import { useRoutineStore } from "@/stores/RoutineStore";
import { mapActions } from "pinia";
import { useCycleStore } from "@/stores/CycleStore";
import { useCycleExerciseStore } from "@/stores/CycleExerciseStore";

export default {
  data: () => ({
    searchLoading: false,
    orderLoading: false,
    searching: false,

    orderByItems: [
      { id: 0, title: "Fecha de creación", orderBy: "date", dir: "asc" },
      {
        id: 1,
        title: "Fecha de creación",
        orderBy: "date",
        dir: "desc",
      },

      { id: 2, title: "Puntuación", orderBy: "score", dir: "asc" },
      { id: 3, title: "Puntuación", orderBy: "score", dir: "desc" },

      { id: 4, title: "Dificultad", orderBy: "difficulty", dir: "asc" },
      { id: 5, title: "Dificultad", orderBy: "difficulty", dir: "desc" },
    ],
    difFilters: [
      { text: "Todas", value: null },
      { text: "Muy fácil", value: "rookie" },
      { text: "Fácil", value: "beginner" },
      { text: "Moderada", value: "intermediate" },
      { text: "Difícil", value: "advanced" },
      { text: "Muy difícil", value: "expert" },
    ],
    ratFilters: [
      { text: "Todas", value: null },
      { text: "0", value: "0" },
      { text: "1", value: "1" },
      { text: "2", value: "2" },
      { text: "3", value: "3" },
      { text: "4", value: "4" },
      { text: "5", value: "5" },
    ],

    search: "",
    searchText: "",
    orderByCriteria: 1,
    difficultyFilter: null,
    scoreFilter: null,
    data: {},

    result: { content: [] },

    searchRules: [
      (value) => {
        if ((value?.length <= 100 && value?.length >= 3) || value?.length == 0)
          return true;
        return "El campo tiene que tener entre 3 y 100 caracteres.";
      },
    ],
  }),
  methods: {
    ...mapActions(useRoutineStore, {
      $getAllRoutines: "getAll",
    }),
    ...mapActions(useCycleStore, {
      $getAllCycles: "getAll",
    }),
    ...mapActions(useCycleExerciseStore, {
      $getAllExercises: "getAll",
    }),

    mergeProps,

    clearSearch() {
      this.searching = false;
      this.searchText = this.search = "";
      this.orderByCriteria = 0;
      this.difficultyFilter = null;
      this.scoreFilter = null;
    },

    async getRoutinesSearch(params) {
      try {
        this.searching = true;
        this.data.search = this.search;
        if (this.search.length == 0) delete this.data["search"];
        if (params) this.data = { ...this.data, ...params };

        const result = await this.$getAllRoutines(this.data);
        this.result = result;

        this.searchText = this.search;

        await Promise.all(
          this.result.content.map(async (routine) => {
            try {
              const result = await this.$getAllCycles(routine.id);
              routine.cycles = result.content;

              await Promise.all(
                routine.cycles.map(async (cycle) => {
                  try {
                    const result = await this.$getAllExercises(cycle.id);
                    cycle.exercises = result.content;
                  } catch (e) {
                    console.error(e);
                  }
                })
              );
            } catch (e) {
              console.error(e);
            }
          })
        );
      } catch (e) {
        console.error(e);
      }
    },

    async submit(event) {
      const results = await event;
      if (!results.valid) return;
      this.searchLoading = true;

      await this.getRoutinesSearch();

      this.searchLoading = false;
    },

    async orderBy(item) {
      this.orderLoading = true;
      this.data.orderBy = item.orderBy;
      this.data.direction = item.dir;
      this.orderByCriteria = item.id;

      if (item.orderBy == null) {
        delete this.data["orderBy"];
        delete this.data["direction"];
      }

      await this.getRoutinesSearch();
      this.orderLoading = false;
    },

    async filterByDifficulty(item) {
      this.difficultyFilter = item.value;
      this.data.difficulty = item.value;
      if (item.value == null) delete this.data["difficulty"];
      await this.getRoutinesSearch();
    },

    async filterByScore(item) {
      this.scoreFilter = item.value;
      this.data.score = item.value;
      if (item.value == null) delete this.data["score"];
      await this.getRoutinesSearch();
    },
  },

  components: {
    SideBar,
    RoutineScroll,
    RoutineGrid,
  },
};
</script>
