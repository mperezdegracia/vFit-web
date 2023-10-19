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
          :rules="[requiredRule, maxLength50Rule]"
          label="Nombre de usuario"
          prepend-inner-icon="mdi-account"
          :counter="50"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[requiredRule, maxLength100Rule]"
          type="email"
          label="Correo electrónico"
          prepend-inner-icon="mdi-email"
          :counter="100"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[requiredRule, maxLength50Rule]"
          type="password"
          label="Contraseña"
          prepend-inner-icon="mdi-lock"
          :counter="50"
        ></v-text-field>
        <v-card-text class="text-h5"> Más información </v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="firstName"
              :rules="maxLength50Rule"
              label="Nombre"
              :counter="50"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              :rules="maxLength50Rule"
              label="Apellido"
              :counter="50"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-select
              v-model="gender"
              label="Genero"
              :rules="requiredRule"
              prepend-inner-icon="mdi-gender-male-female"
              :items="['male', 'female', 'other']"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="birthdate"
              type="date"
              label="Fecha de nacimiento"
              prepend-inner-icon="mdi-cake"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="phone"
              type="number"
              label="Telefono"
              prepend-inner-icon="mdi-phone"
              :counter="50"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="avatarUrl"
              label="URL de avatar"
              prepend-inner-icon="mdi-image-outline"
              :counter="255"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn
          type="submit"
          class="rounded-lg mt-2"
          color="primary"
          variant="tonal"
          block
          >Registrarme</v-btn
        >
        <v-checkbox
          v-model="termsAndConditions"
          :rules="termAndConditionsRule"
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

        <div class="mt-4">
          <p class="text-h6 text-center mb-2">¿Ya tienes una cuenta?</p>
          <v-btn
            @click="navigateToLogin()"
            color="secondary rounded-lg"
            variant="tonal"
            block
            >Iniciar sesión</v-btn
          >
        </div>
      </v-form>
    </v-card-text>
  </v-card>
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
    firstName: "",
    lastName: "",
    gender: "",
    birthdate: "",
    phone: "",
    avatarUrl: "",
    termsAndConditions: false,
    error: null,

    requiredRule: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],
    maxLength50Rule: [
      (value) => {
        if (value?.length <= 50) return true;
        return "El campo tiene que tener menos de 50 caracteres.";
      },
    ],
    maxLength100Rule: [
      (value) => {
        if (value?.length <= 100) return true;
        return "El campo tiene que tener menos de 100 caracteres.";
      },
    ],
    maxLength255Rule: [
      (value) => {
        if (value?.length <= 255) return true;
        return "El campo tiene que tener menos de 255 caracteres.";
      },
    ],
    // birthdate: [
    //   (value) => {
    //     // const date = new Date(value);
    //     // const today = new Date();
    //     // const jesus = new Date("1900/1/1");
    //     return true;
    //     // return "Este campo debe ser una fecha valida.";
    //   },
    // ],
    termAndConditionsRule: [
      (value) => {
        if (value) return true;
        return "Tiene que aceptar los términos y condiciones.";
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
        const user = new User(
          this.username,
          this.email,
          this.password,
          this.firstName,
          this.lastName,
          this.gender,
          Math.floor(new Date(this.birthdate).getTime() / 1000),
          this.phone,
          this.avatarUrl
        );
        await this.$register(user);
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
