<template>
  <v-container fluid>
    <v-row>
      <v-col v-if="result.content.length == 0" align="center">
        <v-img class="rounded" src="/empty.svg" height="250"> </v-img>
      </v-col>
      <v-col
        sm="6"
        md="4"
        lg="3"
        v-for="(routine, index) in result.content"
        :key="index"
        align="start"
        justify="start"
      >
        <RoutineCard
          class="pa-2"
          :routine="routine"
          :getAllRoutines="getAllRoutines"
        />
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col justify="center" align="center">
        <v-btn
          icon="mdi-chevron-left"
          :disabled="result.page == 0"
          @click="getAllRoutines({ page: result.page - 1 })"
          class="mr-1"
        ></v-btn>
        <v-btn
          icon="mdi-chevron-right"
          :disabled="result.isLastPage"
          @click="getAllRoutines({ page: result.page + 1 })"
          class="ml-1"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useFavoriteStore } from "@/stores/FavoriteStore";
import RoutineCard from "./RoutineCard.vue";
import { mapActions } from "pinia";

export default {
  props: {
    result: {
      required: true,
    },
    getAllRoutines: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useFavoriteStore, {
      $getAllFavorites: "getAll",
    }),

    async getAllFavorites() {
      try {
        await this.$getAllFavorites();
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    await this.getAllFavorites();
  },
  components: {
    RoutineCard,
  },
};
</script>
