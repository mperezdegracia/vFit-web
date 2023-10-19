<template>
  <v-row justify="center">
    <v-col sm="10" md="8" lg="6" xl="4">
      <v-card elevation="6" class="rounded-xl">
        <div class="text-center">
          <v-img src="@/assets/logo.png" contain height="250"></v-img>
        </div>
        <v-card-text>
          <v-form validate-on="submit lazy" @submit.prevent="submit">
            <v-alert v-if="error" color="error" class="mb-6" icon="$error">
              <v-alert-title>{{ error.description }}</v-alert-title>
              <ul>
                <li v-for="detail in error.details">
                  {{ detail }}
                </li>
              </ul>
            </v-alert>

            <v-text-field
              v-model="username"
              :rules="rules"
              label="Ingrese su nombre de usuario"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="rules"
              type="email"
              label="Introduzca su correo electrónico"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="rules"
              type="password"
              label="Ingresa tu contraseña"
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
            <v-btn
              type="submit"
              class="rounded-lg"
              color="primary"
              variant="tonal"
              block
              >Inscribirse</v-btn
            >
            <v-checkbox
              v-model="termsAndConditions"
              :rules="agreeToTermsAndConditions"
              color="primary"
              label="Estoy de acuerdo con los términos y condiciones"
            ></v-checkbox>
            <div class="text-center mt-2">
              <p>
                Al continuar, aceptas las condiciones de V-Fit
                <br />
                <a href="#" class="terms-link">Política</a>
                y
                <a href="#" class="terms-link">Condiciones de uso</a>
              </p>
            </div>

            <div class="my-4">
              <p class="text-h6 text-center mb-2">¿Ya tienes una cuenta?</p>
              <v-btn
                @click="navigateToLogin()"
                color="secondary rounded-lg"
                variant="tonal"
                block
                >Inicio de sesión</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.terms-link {
  color: #0077c2;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToLogin = () => {
  router.push({ name: "Login" }); // Navigate to the login page
};
</script>

<script>
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";
import { User } from "@/api/user";

export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
    termsAndConditions: false,
    error: null,

    rules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
    ],
    agreeToTermsAndConditions: [
      (value) => {
        if (value) return true;
        return "You have to agree to the terms & conditions.";
      },
    ],
  }),
  methods: {
    ...mapActions(useSecurityStore, {
      $register: "register",
    }),

    async submit(event) {
      const results = await event;
      if (!results.valid) return;

      try {
        const user = new User(this.username, this.email, this.password);
        await this.$register(user);
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
