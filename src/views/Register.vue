<template>
  <v-card elevation="0" class="w-25 mx-auto custom_card">
    <div class="text-center">
      <v-img src="@/assets/logo.png" contain height="250"></v-img>
    </div>
    <v-card-text>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-alert
          v-if="error"
          color="error"
          class="mb-6"
          icon="$error"
          >
          <v-alert-title>{{ error.description }}</v-alert-title>
          <ul>
            <li v-for="detail in error.details">
              {{ detail }}
            </li>
          </ul>
        </v-alert>

        <v-text-field v-model="username" :rules="rules" label="Enter your username"
          prepend-inner-icon="mdi-account"></v-text-field>
        <v-text-field v-model="email" :rules="rules" type="email" label="Enter your email"
          prepend-inner-icon="mdi-email"></v-text-field>
        <v-text-field v-model="password" :rules="rules" type="password" label="Enter your password"
          prepend-inner-icon="mdi-lock"></v-text-field>
        <v-btn type="submit" class="rounded-lg" color="primary" variant="tonal" block>Sign Up</v-btn>
        <v-checkbox v-model="termsAndConditions" :rules="agreeToTermsAndConditions" color="primary" label="I agree to the terms and conditions"></v-checkbox>
        <div class="text-center mt-2">
          <p>
            By continuing, you agree to vFit's
            <br />
            <a href="#" class="terms-link">Policy</a>
            and
            <a href="#" class="terms-link">Terms of Use</a>
          </p>
        </div>

        <div class="my-4">
          <p class="text-h6 text-center">Already have an account?</p>
          <v-btn @click="navigateToLogin()" color="secondary rounded-lg" variant="tonal" block>Login</v-btn>
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

.custom_card {
  min-width: 400px;
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
        this.error = null;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
