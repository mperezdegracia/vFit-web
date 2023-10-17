<template>
  <v-card elevation="0" class="w-25 mx-auto custom-card">
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

        <v-text-field v-model="username" :rules="rules" label="Enter your username"
          prepend-inner-icon="mdi-account"></v-text-field>
        <v-text-field v-model="password" :rules="rules" type="password" label="Enter your password"
          prepend-inner-icon="mdi-lock"></v-text-field>
        <v-btn type="submit" class="rounded-lg" color="primary" variant="tonal" block>Login</v-btn>
        <v-checkbox v-model="rememberMe" color="primary" label="Remember me"></v-checkbox>

        <div class="mb-4">
          <p class="text-h6 text-center">No account yet?</p>
          <v-btn @click="navigateToRegister()" color="secondary rounded-lg" variant="tonal" block>Sign Up</v-btn>
        </div>

        <div class="mb-4">
          <p class="text-h6 text-center">Your Email is not yet verified?</p>
          <v-btn @click="navigateToVerify()" color="secondary rounded-lg" variant="tonal" block>Verify Email</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.terms-link {
  color: #1976d2;
  text-decoration: none;
  margin: 0 5px;
}

.terms-link:hover {
  text-decoration: underline;
}

.custom-card {
  min-width: 400px;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToRegister = () => {
  router.push({ name: "Register" }); // Navigate to the register page
};
const navigateToVerify = () => {
  router.push({ name: "Verify Email" }); // Navigate to the verify email page
};
</script>

<script>
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";
import { Credentials } from "@/api/user";

export default {
  data: () => ({
    username: "",
    password: "",
    rememberMe: false,
    error: null,

    rules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
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

      try {
        const credentials = new Credentials(this.username, this.password);
        await this.$login(credentials, this.rememberMe);
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
