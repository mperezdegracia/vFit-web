<template>
  <v-select
    v-model="selectedLanguage"
    :items="languages"
    label="Elegir idioma"
    @change="changeLanguage"
    :style="{ 'min-width': '250px', width: '100%' }"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "",
      languages: ["English", "Spanish", "French"],
    };
  },
  methods: {
    changeLanguage() {
      console.log("Selected Language:", this.selectedLanguage);
    },
  },
};
</script>
