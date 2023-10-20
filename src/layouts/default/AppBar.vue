<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->

    <v-col md="2" sm="6" v-if="!$isLoggedIn">
      <router-link to="/">
        <v-img
          src="@/assets/logo_omg.png"
          alt="Logo"
          max-height="120px"
          max-width="120px"
          class="mb-4"
        ></v-img>
      </router-link>
    </v-col>
    <v-col md="2" sm="6" v-else>
      <router-link to="/home">
        <v-img
          src="@/assets/logo_omg.png"
          alt="Logo"
          max-height="120px"
          max-width="120px"
          class="mb-4"
        ></v-img>
      </router-link>
    </v-col>

    <v-col v-if="!$isLoggedIn">
      <v-row align="center" justify="end">
        <div class="d-none d-md-flex">
          <!-- Navigation Buttons -->
          <v-col cols="4" align="center" justify="center">
            <v-btn
              color="black"
              class="mx-1"
              to="/about-us"
              prepend-icon="mdi-account-group"
            >
              Equipo
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn
              color="black"
              class="mx-1"
              to="/services"
              prepend-icon="mdi-database"
            >
              Servicios
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn
              color="black"
              class="mx-1"
              to="/contact"
              prepend-icon="mdi-card-account-mail"
            >
              Contacto
            </v-btn>
          </v-col>
        </div>

        <!-- Login Button -->
        <v-btn
          variant="outlined"
          color="primary"
          class="ma-4"
          to="/login"
          prepend-icon="mdi-login"
        >
          Iniciar Sesión
        </v-btn>
      </v-row>
    </v-col>
    <v-col align="end" justify="end" v-else>
      <v-row align="end" justify="end">
        <div class="d-none d-md-flex">
          <!-- Navigation Buttons -->
          <v-btn
            color="black"
            class="mx-1"
            to="/settings"
            prepend-icon="mdi-cog"
            >Ajustes</v-btn
          >
        </div>

        <v-btn
          @click="logout()"
          variant="outlined"
          color="primary"
          class="mr-5 ml-1"
          :loading="loading"
          prepend-icon="mdi-logout"
          >Cerrar Sesión</v-btn
        >
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";

export default {
  data: () => ({
    loading: false,
  }),
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
      this.loading = true;
      await this.$logout();
      this.loading = false;
    },
  },
  async created() {
    const securityStore = useSecurityStore();
    securityStore.initialize();
  },
};
</script>
