<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->
    <img v-if="!$isLoggedIn" @click="navigate('Landing')" src="@/assets/logo_omg.png" alt="Logo" class="logo-img mb-4" />
    <img v-else @click="navigate('Home')" src="@/assets/logo_omg.png" alt="Logo" class="logo-img mb-4" />

    <!-- Spacer to push icons to the right -->
    <v-spacer></v-spacer>

    <div v-if="!$isLoggedIn">
      <!-- Navigation Buttons -->
      <v-btn text class="mx-1">About Us</v-btn>
      <v-btn text class="mx-1">Services</v-btn>
      <v-btn text class="mx-1">Contact</v-btn>

      <!-- Login Button -->
      <v-btn @click="navigate('Login')" variant="outlined" color="primary" class="mr-5 ml-1">Login</v-btn>
    </div>
    <div v-else>
      <!-- TODO: Agregar botones de mis rutinas y cosas de logged in -->
      <v-btn @click="logout()" variant="outlined" color="primary" class="mr-5 ml-1">Logout</v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.logo-img {
  max-height: 120px;
  max-width: 120px;
}

.logo-img:hover {
  cursor: pointer;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigate = (route) => {
  router.push({ name: route });
};
</script>

<script>
import { mapState, mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";

export default {
  computed: {
    ...mapState(useSecurityStore, {
      $isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $logout: "logout",
    }),

    async logout() {
      await this.$logout();
    },
  },
  async created() {
    const securityStore = useSecurityStore();
    securityStore.initialize();
  },
};
</script>
