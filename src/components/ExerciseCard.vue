<template>
  <v-card
    :loading="loading"
    class="mx-auto text-left bg-grey-lighten-4"
    max-width="374"
    min-width="250"
    :border="true"
    @click="expand = !expand"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-item class="px-2">
      <v-card-title>{{ exercise.name }}</v-card-title>
    </v-card-item>

    <v-card-subtitle class="px-2 py-1">
      <span class="font-weight-bold">Type: </span>{{ exercise.type }}
    </v-card-subtitle>

    <v-card-text class="px-2">
      {{
        expand
          ? exercise.detail
          : `${exercise.detail.substring(0, 30)}${
              exercise.detail.length > 30 ? "..." : ""
            }`
      }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    expand: false,
  }),
  props: {
    exercise: {
      required: true,
    },
  },
};
</script>
