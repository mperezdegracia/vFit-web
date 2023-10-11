<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->

    <img
      @click="navigate('Home')"
      src="@/assets/logo_omg.png"
      alt="Logo"
      class="logo-img mb-4"
    />

    <!-- Spacer to push icons to the right -->
    <v-spacer></v-spacer>

    <!-- Navigation Buttons -->
    <v-btn text class="mx-1">About Us</v-btn>
    <v-btn text class="mx-1">Services</v-btn>
    <v-btn text class="mx-1">Contact</v-btn>

    <!-- Login Button -->
    <v-btn
      @click="navigate('Login')"
      variant="outlined"
      color="primary"
      class="mr-5 ml-1"
      >Login</v-btn
    >
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigate = (route) => {
  // Implement navigation based on the route (e.g., using Vue Router)
  console.log("Navigating to:", route);
  // Example: Navigate to the route
  router.push({ name: route });
};
</script>

<style scoped>
.logo-img {
  max-height: 120px; /* Set the maximum height to 80px */
  max-width: 120px; /* Set the maximum width to 80px */
}
</style>
