<template>
  <div class="bg-contrast pb-16">
    <v-container fluid>
      <v-row>
        <v-col md="2">
          <SideBar />
        </v-col>
        <v-col md="10">
          <h1 class="text-h2 pt-10 text-primary text-center font-weight-bold">
            Welcome Back!
          </h1>
          <div class="search-div">
            <v-responsive class="search-container" max-width="60%">
              <v-text-field class="search-field" v-model="search" id="search" label="Search" variant="solo" outlined dense
                rounded clearable @input="constantSearch" @click:clear="clearSearch" @keydown.enter="searchItems"
                prepend-inner-icon="mdi-magnify">
                <template #append>
                  <v-btn @click="searchItems" icon>
                    <v-icon> mdi-send </v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-responsive>
          </div>
          <div v-if="searchResult.length === 0">
            <v-row align="center" justify="center" class="mt-4 mb-10">


              <v-col class=" rounded-xl elevation-4 ma-4 action-card" md="3" sm="6" align="center" justify="center">
                <router-link class="text-decoration-none text-black" to="/my-routines">
                  <v-img :width="250" :height="250" cover src="/home0.svg" />
                  <p class="text-h5">Start working out!</p>
                </router-link>
              </v-col>
              <v-col class=" rounded-xl elevation-4 ma-4 action-card" md="3" sm="6" align="center" justify="center">
                <router-link class="text-decoration-none text-black" to="/exercises">
                  <v-img :width="250" :height="250" cover src="/home1.svg" />
                  <p class="text-h5">Create an exercise!</p>
                </router-link>
              </v-col>

              <v-col class=" rounded-xl elevation-4 ma-4 action-card" md="3" sm="6" align="center" justify="center">
                <router-link class="text-decoration-none text-black" to="/routine/create">
                  <v-img :width="250" :height="250" cover src="/home2.svg" />
                  <p class="text-h5">Create your routine!</p>
                </router-link>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <div>
              <h1 class="text-center text-h3 text-primary slide-title ma-5 subtitles">
                Recommended
              </h1>
              <div class="d-flex justify-center flex-scroll-container">
                <div class="scroll-container ma-0">
                  <RoutineScroll :routines="routines"></RoutineScroll>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h1 class="w-50 text-center text-h4 text-secondary slide-title pt-5" id="searchResultLabel">
              {{ searchResultLabel }}
            </h1>
            <!-- <div class="d-flex flex-container mx-auto">
        <RoutineCard v-for="routine in searchResult" :routine="routine" class="mx-auto" />
      </div> -->

            <RoutineGrid :routines="searchResult"></RoutineGrid>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import RoutineScroll from "@/components/RoutineScroll.vue";
import RoutineGrid from "@/components/RoutineGrid.vue";
import SideBar from "@/components/SideBar.vue";
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

.action-card:hover {
  background-color: #f7f7f7;
}

.action-card {
  background-color: white;
  transition: background-color 0.1s ease-in-out, color 0.2s ease-in-out;
}

.action-card:active {
  background-color: white;
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
