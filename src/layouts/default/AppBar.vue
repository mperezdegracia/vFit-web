<template>
  <v-app-bar color="white" app>
    <!-- Logo/Branding -->

    <v-col cols="4" v-if="!$isLoggedIn">
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
    <v-col cols="4" v-else>
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
    <!-- Spacer to push icons to the right -->

    <v-col cols="8" v-if="!$isLoggedIn">
      <v-row align="center" justify="end">
        <div class="d-none d-md-flex">
          <!-- Navigation Buttons -->
          <v-col cols="4" align="center" justify="center">
            <v-btn color="black" class="mx-1" to="/about-us"> Equipo </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn color="black" class="mx-1" to="/services"> Servicios </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn color="black" class="mx-1" to="/contact"> Contacto </v-btn>
          </v-col>
        </div>

        <!-- Login Button -->
        <v-btn variant="outlined" color="primary" class="ma-4" to="/login">
          Iniciar Sesión
        </v-btn>
      </v-row>
    </v-col>
    <v-col cols="8" align="end" justify="end" v-else>
      <v-row align="center" justify="end">
        <div class="d-none d-sm-flex">
          <!-- Navigation Buttons -->
          <v-btn color="black" class="mx-1" to="/settings">Ajustes</v-btn>
        </div>

        <v-btn
          @click="logout()"
          variant="outlined"
          color="primary"
          class="mr-5 ml-1"
          >Cerrar Sesión</v-btn
        >
      </v-row>
    </v-col>
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
