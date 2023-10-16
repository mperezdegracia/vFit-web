<template>
  <div class="bg-contrast justify-center align-center">
    <h1 class="text-h2 pt-10 text-secondary text-center">Welcome Back!</h1>
    <div class="search-div">
      <v-responsive class="search-container" max-width="40%">
        <v-text-field
          class="search-field"
          v-model="search"
          id="search"
          label="Search"
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
      <v-btn
        variant="tonal"
        color="primary"
        class="new-button"
        @click="navigate('Create-Routine')"
        >New Routine</v-btn
      >
    </div>
    <v-divider class="mx-auto divider mb-2 mt-10"></v-divider>
    <div v-if="searchResult.length === 0">
      <v-container fluid>
        <v-row>
          <v-col cols="2" md="2" class="d-md-block d-sm-none">
            <v-sheet>
              <v-layout>
                <v-navigation-drawer class="bg-primary" permanent>
                  <v-list nav>
                    <v-list-item
                      prepend-icon="mdi-view-dashboard"
                      title="Home"
                      value="home"
                      to="/home"
                    />
                    <v-list-item
                      prepend-icon="mdi-weight-lifter"
                      title="My Routines"
                      value="my_routines"
                      to="/my-routines"
                    />
                    <v-list-item
                      prepend-icon="mdi-heart"
                      title="Liked"
                      value="liked"
                      to="/home/liked"
                    />
                    <v-list-item
                      prepend-icon="mdi-dumbbell"
                      title="Exercises"
                      value="exercises"
                      to="/exercises"
                    />
                  </v-list>
                </v-navigation-drawer>
                <v-main style="height: 225px"></v-main>
              </v-layout>
            </v-sheet>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="10" md="10">
            <div>
              <h1
                class="text-center text-h4 text-secondary slide-title pt-5 subtitles"
              >
                Recommended
              </h1>
              <div class="d-flex justify-center flex-scroll-container">
                <div class="scroll-container">
                  <RoutineScroll :routines="routines"></RoutineScroll>
                </div>
              </div>
            </div>
            <v-divider class="mx-auto divider mb-2 mt-10"></v-divider>
            <div>
              <h1
                class="text-center text-h4 text-secondary slide-title subtitles"
                id="liked-section"
              >
                Liked
              </h1>
              <div class="d-flex justify-center flex-scroll-container">
                <div class="scroll-container">
                  <RoutineScroll :routines="routines"></RoutineScroll>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-else>
      <h1
        class="w-50 text-center text-h4 text-secondary slide-title pt-5"
        id="searchResultLabel"
      >
        {{ searchResultLabel }}
      </h1>
      <!-- <div class="d-flex flex-container mx-auto">
        <RoutineCard v-for="routine in searchResult" :routine="routine" class="mx-auto" />
      </div> -->

      <RoutineGrid :routines="searchResult"></RoutineGrid>
    </div>
  </div>
</template>

<script setup>
import RoutineScroll from "@/components/RoutineScroll.vue";
import RoutineCard from "@/components/RoutineCard.vue";
import RoutineGrid from "@/components/RoutineGrid.vue";
import { useRouter } from "vue-router";

import routines from "@/data/mockRoutines.js";
import { ref } from "vue";
let tab = "home";
const router = useRouter();

const navigate = (routeName) => {
  router.push({ name: routeName }); // Navigate to the register page
};
const name = "SearchBar"; // Asigna el nombre de componente a una constante
let search = ""; // Cambia "data" a "let" para definir una variable local
let searchResult = ref("");
let searchResultLabel = ""; // Texto del h1 de searchResults
const searchResultLabelId = "searchResultLabel";

const searchItems = () => {
  if (search.length > 0) {
    // Perform search logic here
    console.log(`Searching for ${search.toLowerCase()}`);
    // hacer la logica del search
    searchResult.value = routines;

    // No se xq la primera vez no me cambia el txt
    changeText(search);

    return { searchResult };
  }
};

const constantSearch = () => {
  if (search.length > 3) {
    searchItems();
  }
};

const scrollToLiked = () => {
  const likedSection = document.getElementById("liked-section");
  if (likedSection) {
    likedSection.scrollIntoView({ behavior: "smooth" });
  }
};

const changeText = (search) => {
  searchResultLabel = "Results for '" + search + "'";
  const searchResultLabel1 = document.getElementById("searchResultLabel");
  searchResultLabel1.textContent = searchResultLabel;
};

const clearSearch = () => {
  searchResult.value = "";
  search = "";
};
</script>

<style>
.new-button {
  position: absolute;
  margin-left: 62%;
  min-height: 45px;
  margin-bottom: 18px;
  opacity: 90%;
}

.divider {
  width: 90%;
}

.subtitles {
  margin-bottom: -50px;
}

.scroll-container {
  margin-top: 40px;
  align-items: center;
  width: 80%;
}

.slide-title {
  font-family: "Courier New", Courier, monospace;
}

.search-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .search-div {
    display: block;
  }

  .divider {
    width: 90%;
    margin-top: 50px !important;
  }

  .search-container {
    min-width: 80%;
    margin: auto;
  }
}

.search-field {
  min-width: 40%;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  /* Permite que los elementos se envuelvan a la siguiente línea cuando no haya suficiente espacio */
  justify-content: center;
  /* Distribuye el espacio disponible de manera uniforme entre los elementos */
}

/* Establece un ancho específico para cada elemento para que haya 3 por fila */
.flex-container .routine-card {
  width: calc(33.33% - 10px);
  /* Resta 10px de margen para que haya espacio entre los elementos */
  margin-bottom: 20px;
  /* Espacio entre las filas */
}

.my-custom-button {
  color: black;
  /* Utiliza el color heredado para el icono */
}

.custom-append-icon {
  position: absolute;
  top: 50%;
  right: 25px;
  /* Ajusta la distancia desde el borde derecho del campo de texto */
  transform: translateY(-90%);
}
</style>
