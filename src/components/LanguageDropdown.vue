<template>
  <v-select
    v-model="selectedLanguage"
    :items="['English', 'Spanish', 'French']"
    label="Elegir idioma"
    :style="{ 'min-width': '250px', width: '100%' }"
  ></v-select>
</template>

<script>
export default {
  data: () => ({
    selectedLanguage: "Spanish", // Initially selected language
  }),
};
</script>
