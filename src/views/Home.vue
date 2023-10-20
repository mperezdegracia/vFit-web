<template>
  <v-row>
    <v-col cols="12" md="2">
      <SideBar />
    </v-col>

    <v-col>
      <v-row align="center" justify="center" class="ma-3">
        <h1 class="text-h2 text-primary text-center font-weight-bold mr-4">
          ¡Bienvenido!
        </h1>
        <v-menu>
          <template v-slot:activator="{ props: menu }">
            <v-tooltip location="top">
              <template v-slot:activator="{ props: tooltip }">
                <v-btn
                  color="primary"
                  icon="mdi-order-bool-descending"
                  v-bind="mergeProps(menu, tooltip)"
                ></v-btn>
              </template>
              <span>Ordenar por</span>
            </v-tooltip>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <v-sheet class="bg-contrast mt-10" align="center" justify="center">
        <v-responsive class="search-container" max-width="600">
          <v-text-field
            class="search-field"
            v-model="search"
            id="search"
            label="Buscar"
            variant="solo"
            outlined
            dense
            rounded
            clearable
            @input="constantSearch"
            @click:clear="clearSearch"
            @keydown.enter="searchItems"
            prepend-inner-icon="mdi-magnify"
          >
            <template #append>
              <v-btn @click="searchItems" icon>
                <v-icon> mdi-send </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-responsive>
      </v-sheet>
      <div v-if="searchResult.length == 0">
        <v-row align="center" justify="center" class="mt-4 mb-10">
          <v-col md="3" sm="6" align="center" justify="center">
            <v-card class="rounded-xl elevation-4 ma-4 pb-3" to="/my-routines">
              <v-img :width="250" :height="250" cover src="/home0.svg" />
              <p class="text-h5">¡Ejecute una rutina!</p>
            </v-card>
          </v-col>
          <v-col md="3" sm="6" align="center" justify="center">
            <v-card class="rounded-xl elevation-4 ma-4 pb-3" to="/exercises">
              <v-img :width="250" :height="250" cover src="/home1.svg" />
              <p class="text-h5">¡Crea un ejercicio!</p>
            </v-card>
          </v-col>

          <v-col md="3" sm="6" align="center" justify="center">
            <v-card
              class="rounded-xl elevation-4 ma-4 pb-3"
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
              class="w-50 text-center text-h4 text-secondary"
              id="searchResultLabel"
            >
              {{ searchResultLabel }}
            </h1>
          </v-col>
          <v-col cols="2"> </v-col>
        </v-row>
        <!-- <div class="d-flex flex-container mx-auto">
              <RoutineCard
                v-for="routine in searchResult"
                :routine="routine"
                class="mx-auto"
              />
            </div> -->
        <RoutineGrid :routines="searchResult"></RoutineGrid>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import RoutineScroll from "@/components/RoutineScroll.vue";
import RoutineGrid from "@/components/RoutineGrid.vue";
import SideBar from "@/components/SideBar.vue";
import routines from "@/data/mockRoutines.js";
import { ref, mergeProps } from "vue";

export default {
  data: () => ({
    search: "", // Cambia "data" a "let" para definir una variable local
    searchResult: ref(""),
    searchResultLabel: "", // Texto del h1 de searchResults
    searchResultLabelId: "searchResultLabel",
    items: [
      { title: "Fecha de creación" },
      { title: "Puntuación" },
      { title: "Dificultad" },
      { title: "Categoría" },
    ],
  }),
  methods: {
    mergeProps,

    searchItems() {
      if (this.search.length > 0) {
        // Perform search logic here
        console.log(`Searching for ${this.search.toLowerCase()}`);
        // hacer la logica del search
        this.searchResult.value = routines;

        // No se xq la primera vez no me cambia el txt
        changeText(this.search);

        return this.searchResult;
      }
    },

    constantSearch() {
      if (this.search.length > 3) {
        searchItems();
      }
    },

    scrollToLiked() {
      const likedSection = document.getElementById("liked-section");
      if (likedSection) {
        likedSection.scrollIntoView({ behavior: "smooth" });
      }
    },

    changeText(search) {
      this.searchResultLabel = "Results for '" + search + "'";
      const searchResultLabel1 = document.getElementById("searchResultLabel");
      searchResultLabel1.textContent = this.searchResultLabel;
    },

    clearSearch() {
      this.searchResult.value = "";
      this.search = "";
    },
  },
  components: {
    SideBar,
    RoutineScroll,
    RoutineGrid,
  },
};
</script>
