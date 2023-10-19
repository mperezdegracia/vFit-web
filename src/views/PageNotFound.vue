<template>
  <div fluid class="ma-8">
    <v-row align="center" justify="center">
      <v-col cols="4" align="center" justify="center">
        <v-img :width="350" src="/lost0.svg" />
      </v-col>
      <v-col cols="4" align="center" justify="center">
        <div class="mt-4">
          <h1 class="text-primary text-center">Error 404</h1>
          <h1 class="text-center">La página que buscas no existe.</h1>
          <router-link to="/home">
            <v-btn color="primary" class="ma-4"> A página de inicio </v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="4" align="center" justify="center">
        <v-img :width="350" src="/lost1.svg"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
