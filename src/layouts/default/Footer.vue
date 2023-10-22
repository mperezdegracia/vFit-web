<template>
  <v-footer class="bg-primary">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} —
        <span class="font-weight-bold">VFit &copy </span>
      </v-col>
      <v-col class="text-center mt-4" cols="9">
        <a href="https://www.instagram.com/" target="_blank">
          <v-icon icon="mdi-instagram" class="mr-2 icon-lg" />
        </a>
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
          <v-icon icon="mdi-facebook" class="mr-2 icon-lg" />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <v-icon icon="mdi-twitter" class="mr-2 icon-lg" />
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.icon-lg {
  font-size: 30px;
  color: aliceblue;
}

.icon-lg:hover {
  color: lightcoral;
}
</style>
