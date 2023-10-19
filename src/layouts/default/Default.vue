<template>
  <v-app>
    <default-bar />
    <v-container fluid class="h-100 w-100 bg-contrast pb-16 pt-4">
      <default-view />
    </v-container>
    <default-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultFooter from "./Footer.vue";
import DefaultView from "./View.vue";
</script>
