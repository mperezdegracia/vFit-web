<template>
  <v-select
    v-model="selectedLanguage"
    :items="languages"
    label="Select Language"
    @change="changeLanguage"
    :style="{ 'min-width': '200px' }"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "", // Initially selected language
      languages: [
        "English",
        "Spanish",
        "French",
        // Add more languages as needed
      ],
    };
  },
  methods: {
    changeLanguage() {
      // You can handle the language change event here
      console.log("Selected Language:", this.selectedLanguage);
      // You can also use an event bus or a store to propagate the language change to other components.
    },
  },
};
</script>
