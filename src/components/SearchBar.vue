<template>
    <v-responsive class="search-container" max-width="40%">
      <v-text-field
        class="search-field"
        v-model="search"
        label="Search"
        variant="solo"
        outlined
        dense
        rounded
        clearable
        @keydown.enter="searchItems"
        prepend-inner-icon="mdi-magnify"
      />
    </v-responsive>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchItems() {
      // Perform search logic here
      console.log(`Searching for ${this.search}`);
    },
  },
};
</script>
<style>
.search-field {
  min-width: 40%;
}

@media (max-width: 600px) {
  .search-container {
    min-width: 80%;
    margin: auto;
  }

}
</style>
