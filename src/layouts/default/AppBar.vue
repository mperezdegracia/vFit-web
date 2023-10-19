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
      <router-link to="/about-us">
        <v-btn color="black" class="mx-1"> Equipo </v-btn>
      </router-link>
      <router-link to="/services">
        <v-btn color="black" class="mx-1"> Servicios </v-btn>
      </router-link>
      <router-link to="/contact">
        <v-btn color="black" class="mx-1"> Contacto </v-btn>
      </router-link>

      <!-- Login Button -->
      <router-link to="/login">
        <v-btn variant="outlined" color="primary" class="ma-4">
          Iniciar Sesión
        </v-btn>
      </router-link>
    </div>
    <div v-else>
      <!-- Navigation Buttons -->
      <router-link to="/settings">
        <v-btn color="black" class="mx-1">Ajustes</v-btn>
      </router-link>
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
