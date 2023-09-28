<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->



    <img @click="navigate('home')" src="@/assets/logo_omg.png" alt="Logo" class="logo-img mb-4" />
    

    
    <!-- Spacer to push icons to the right -->
    <v-spacer></v-spacer>

    <!-- Navigation Buttons -->
    <v-btn text @click="navigate('about-us')" class="mx-1">About Us</v-btn>
    <v-btn text @click="navigate('services')" class="mx-1">Services</v-btn>
    <v-btn text @click="navigate('contact')" class="mx-1">Contact</v-btn>

    <!-- Login Button -->
    <v-btn  @click="navigate('login')" variant="outlined" color="secondary" class="mr-5 ml-1">Login</v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigate = (route) => {
  // Implement navigation based on the route (e.g., using Vue Router)
  console.log("Navigating to:", route);
  // Example: Navigate to the route
  router.push({ path: `/${route}` });
};
</script>

<style scoped>
.logo-img {
  max-height: 120px; /* Set the maximum height to 80px */
  max-width: 120px; /* Set the maximum width to 80px */
}
</style>
