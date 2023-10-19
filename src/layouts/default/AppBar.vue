<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->
    <v-img
      v-if="!$isLoggedIn"
      @click="navigate('Landing')"
      src="@/assets/logo_omg.png"
      alt="Logo"
      max-height="120px"
      max-width="120px"
      class="mb-4"
    ></v-img>
    <v-img
      v-else
      @click="navigate('Home')"
      src="@/assets/logo_omg.png"
      alt="Logo"
      max-height="120px"
      max-width="120px"
      class="mb-4"
    ></v-img>

    <!-- Spacer to push icons to the right -->
    <v-spacer></v-spacer>

    <div v-if="!$isLoggedIn">
      <!-- Navigation Buttons -->
      <v-btn color="black" class="mx-1" to="/about-us"> Equipo </v-btn>
      <v-btn color="black" class="mx-1" to="/services"> Servicios </v-btn>
      <v-btn color="black" class="mx-1" to="/contact"> Contacto </v-btn>

      <!-- Login Button -->
      <v-btn variant="outlined" color="primary" class="ma-4" to="/login">
        Iniciar Sesión
      </v-btn>
    </div>
    <div v-else>
      <!-- Navigation Buttons -->
      <v-btn color="black" class="mx-1" to="/settings">Ajustes</v-btn>
      <!-- TODO: Agregar botones de mis rutinas y cosas de logged in -->
      <v-btn
        @click="logout()"
        variant="outlined"
        color="primary"
        class="mr-5 ml-1"
        >Cerrar Sesión</v-btn
      >
    </div>
  </v-app-bar>
</template>

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
