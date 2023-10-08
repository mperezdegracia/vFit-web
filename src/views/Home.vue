<template>
  <div class="bg-contrast justify-center align-center">
    <h1 class="text-h2 pt-10 text-secondary text-center">Welcome Back!</h1>
    <div class="search-div">
      <v-responsive class="search-container" max-width="40%">
        <v-text-field class="search-field" v-model="search" label="Search" variant="solo" outlined dense rounded clearable
          @input="constantSearch" @keydown.enter="searchItems" prepend-inner-icon="mdi-magnify">
          <template v-slot:append>
              <v-icon @click="clearSearch" type="button" class="custom-append-icon">mdi-close</v-icon>   
          </template>
        </v-text-field>

      </v-responsive>
      <v-btn color="primary new-button">New Routine</v-btn>
    </div>
    <v-divider class="mx-auto divider mb-2 mt-10"></v-divider>
    <div v-if="searchResult.length === 0">
      <h1 class="w-50 text-center font-weight-medium text-h4 slide-title"> Recommended</h1>
      <div class="d-flex justify-center flex-scroll-container">
        <div class="scroll-container">
          <RoutineScroll :routines="routines"></RoutineScroll>
        </div>
      </div>

      <h1 class="w-50 text-center font-weight-medium text-h4 slide-title"> Liked</h1>
      <div class="d-flex justify-center flex-scroll-container">
        <div class="scroll-container">
          <RoutineScroll :routines="routines"></RoutineScroll>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="w-50 text-center font-weight-medium text-h4 slide-title"> Search result</h1>
      <div class="d-flex justify-center flex-scroll-container">
        <div class="scroll-container flex-container">
          <RoutineCard v-for="routine in searchResult" :routine="routine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RoutineScroll from "@/components/RoutineScroll.vue";
import RoutineCard from "@/components/RoutineCard.vue";
import routines from "@/data/mockRoutines.js";
import { ref } from 'vue';

const name = "SearchBar"; // Asigna el nombre de componente a una constante
let search = ""; // Cambia "data" a "let" para definir una variable local
let searchResult = ref("");
const searchItems = () => {
  // Perform search logic here
  console.log(`Searching for ${search.toLowerCase()}`);
  // hacer la logica del search
  searchResult.value = routines;
  return { searchResult };
};

const constantSearch = () => {

  if (search.length > 3) {
    searchItems();
  }
};

const clearSearch = () => {
  searchResult.value = "";
  search = "";
}


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

.scroll-container {
  margin-top: 40px;
  align-items: center;
  width: 80%;
}

.flex-scroll-container {}

.slide-title {
  font-family: 'Courier New', Courier, monospace;
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
  justify-content: space-between;
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
  right: 25px; /* Ajusta la distancia desde el borde derecho del campo de texto */
  transform: translateY(-90%);
}
</style>
