<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2" md="2" class="d-md-block d-sm-none">
        <SideBar />
      </v-col>
      <v-col cols="10">
        <h1>LIKED</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>
