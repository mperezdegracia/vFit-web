<template>
  <v-card elevation="0" class="w-25 mx-auto custom_card">
    <v-card-text>
      <v-card-title class="d-flex align-center justify-center">
        Cambiar contraseña
      </v-card-title>
      <v-form>
        <v-text-field
          label="Enter your password"
          :rules="passRules"
          v-model="oldPassword"
          name="previousPass"
          type="password"
          class="rounded-0"
          outlined
        ></v-text-field>
        <v-text-field
          label="Enter your new password"
          :rules="newPassRules"
          v-model="password"
          name="password"
          type="password"
          class="rounded-0"
          outlined
        />
        <v-text-field
          label="Repeat your new password"
          :rules="repPassRules"
          v-model="secondPassword"
          name="password"
          type="password"
          class="rounded-0"
          outlined
        />
        <v-btn
          class="rounded-lg"
          color="primary"
          variant="tonal"
          x-large
          block
          dark
          >Cambiar contraseña</v-btn
        >
        <br />
        <RouterLink
          to="#"
          class="d-flex align-center justify-center terms-link"
        >
          ¿Olvidaste tu contraseña?
        </RouterLink>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { useRouter } from "vue-router";

const router = useRouter();
export default {
  data() {
    return {
      password: "", // Campo de contraseña principal
      secondPassword: "", // Campo de confirmación de contraseña
      oldPassword: "",

      passRules: [
        (value) => {
          if (value) return true;
          return "Password is required.";
        },
        (value) => {
          if (value?.length > 16 || value?.length < 8)
            return "Password must be between 8 and 16 characters";
          return true;
        },
      ],
      newPassRules: [
        (value) => {
          if (value) return true;
          return "Password is required.";
        },
        (value) => {
          if (value === this.oldPassword) {
            return "New password must be diferent";
          }
        },
        (value) => {
          if (value?.length > 16 || value?.length < 8)
            return "Password must be between 8 and 16 characters";
          return true;
        },
      ],
      repPassRules: [
        (value) => {
          if (value) return true;
          return "Password is required.";
        },
        (value) => {
          if (value?.length > 16 || value?.length < 8)
            return "Password must be between 8 and 16 characters";
          return true;
        },
        (value) => {
          if (value === this.password) {
            return true;
          }
          return "Las contraseñas no coinciden";
        },
      ],
    };
  },
};
</script>

<style scoped>
.terms-link {
  color: #1976d2;
  /* Change to your desired link color */
  text-decoration: none;
  margin: 0 5px;
  /* Adjust the spacing between links */
}

.terms-link:hover {
  text-decoration: underline;
  /* Underline the link on hover */
}

.custom_card {
  min-width: 400px;
}
</style>
In this version, the d-flex, align-center, justify-center, and flex-wrap classes
have been applied to v-card-actions. These classes use flexbox properties to
align the content both vertically and horizontally and wrap the elements
properly. The "Sign Up" button and the checkbox should now be horizontally
centered. Adjust the styles as needed to achieve your desired layout.
