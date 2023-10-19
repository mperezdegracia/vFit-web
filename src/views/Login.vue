<template>
  <v-card elevation="6" class="mx-auto rounded-xl" max-width="500">
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
          label="Nombre de usuario"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="rules"
          type="password"
          label="Contraseña"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <v-btn
          type="submit"
          class="rounded-lg"
          color="primary"
          variant="tonal"
          block
          :loading="loading"
          >Iniciar sesión</v-btn
        >
        <v-checkbox
          v-model="rememberMe"
          color="primary"
          label="Recordar mi sesión"
        ></v-checkbox>

        <div class="mb-4">
          <p class="text-h6 text-center mb-2">¿No tienes cuenta aún?</p>
          <v-btn
            to="/register"
            color="secondary rounded-lg"
            variant="tonal"
            block
            >Registrarse</v-btn
          >
        </div>

        <p class="text-h6 text-center mb-2">
          ¿Su correo electrónico aún no está verificado?
        </p>
        <v-btn
          to="/verify-email"
          color="secondary rounded-lg"
          variant="tonal"
          block
          >Verificar correo electrónico</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";
import { Credentials } from "@/api/user";

export default {
  data: () => ({
    loading: false,
    username: "",
    password: "",
    rememberMe: false,
    error: null,

    rules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],
  }),
  methods: {
    ...mapActions(useSecurityStore, {
      $login: "login",
    }),

    async submit(event) {
      const result = await event;
      if (!result.valid) return;
      this.loading = true;

      try {
        const credentials = new Credentials(this.username, this.password);
        await this.$login(credentials, this.rememberMe);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    },
  },
};
</script>
