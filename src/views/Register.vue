<template>
  <v-card elevation="0" class="w-25 mx-auto custom_card">
    <div class="text-center">
      <a href="/home" target="_blank">
        <v-img src="@/assets/logo.png" contain height="250"></v-img>
      </a>
    </div>
    <v-card-text>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
          v-model="username"
          :rules="rules"
          label="Enter your username"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="rules"
          type="email"
          label="Enter your email"
          prepend-inner-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="rules"
          type="password"
          label="Enter your password"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <v-checkbox
          color="primary"
          label="I agree to the terms and conditions"
        ></v-checkbox>

        <v-btn
          type="submit"
          class="rounded-lg w-50 mt-0"
          color="primary"
          variant="tonal"
          x-large
          block
          dark
          >Sign Up</v-btn
        >
        <div class="mt-2">
          <p class="text-h6 text-center">Already have an account?</p>
          <v-btn
            @click="navigateToLogin"
            color="secondary"
            x-large
            block
            dark
            variant="tonal"
            >Login</v-btn
          >
        </div>
        <div class="text-center mt-4">
          <p>
            By continuing, you agree to vFit's
            <br />
            <a href="#" class="terms-link">Policy</a>
            and
            <a href="#" class="terms-link">Terms of Use</a>
          </p>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* .v-card { */
/*   background-color: #fff; */
/*   border-radius: 10px; */
/*   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
/*   padding: 30px; */
/* } */
/**/
/* .v-card-title { */
/*   font-size: 24px; */
/*   font-weight: bold; */
/*   margin-bottom: 30px; */
/* } */
/**/
/* .v-text-field { */
/*   margin-bottom: 20px; */
/* } */
/**/
/* .v-btn { */
/*   margin-top: 20px; */
/* } */
/**/
/* .v-card-actions { */
/*   margin-top: 30px; */
/*   position: relative; */
/*   bottom: 0px; */
/* } */
/**/
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

/* .v-btn.rounded-circle { */
/*   width: 20px; */
/*   height: 60px; */
/*   margin-top: 20px; */
/* } */
</style>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth.store";

const router = useRouter();
const navigateToLogin = () => {
  router.push({ name: "Login" }); // Navigate to the register page
};
</script>

<script>
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",

    rules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
    ],
  }),
  methods: {
    async submit(event) {
      const results = await event;
      if (!results.valid) return;
      const authStore = useAuthStore();
      await authStore.register(this.username, this.email, this.password);
    },
  },
};
</script>
