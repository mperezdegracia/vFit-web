<template>
  <v-card elevation="0" class="w-25 mx-auto custom_card">
    <div class="text-center">
      <a
        href="http://localhost:3000/home"
        name="Fedorae Education"
        title="Fedorae Education"
        target="_blank"
      >
        <v-img
          src="@/assets/logo.png"
          alt="Fedorae Education Log"
          contain
          height="250"
        ></v-img>
      </a>
    </div>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Enter your email"
          name="email"
          prepend-inner-icon="mdi-email"
          type="email"
          class="rounded-0"
          outlined
        ></v-text-field>
        <v-text-field
          label="Enter your password"
          name="password"
          prepend-inner-icon="mdi-lock"
          type="password"
          suffix="| Forgot?"
          class="rounded-0"
          outlined
        ></v-text-field>

        <RouterLink
          to="#"
          class="d-flex align-center justify-center terms-link"
        >
          forgot your password?
        </RouterLink>
        <br />
        <v-btn
          class="rounded-lg"
          color="primary"
          variant="tonal"
          x-large
          block
          dark
          >Login</v-btn
        >
        <div class="d-flex align-center mt-2">
          <v-checkbox
            color="primary"
            class="pt-3"
            label="Remember me"
          ></v-checkbox>
          <v-btn
            @click="navigateToRegister"
            color="secondary"
            variant="tonal"
            class="ml-5 mb-4"
            >Sign Up</v-btn
          >
        </div>

        <div class="text-center">
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

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToRegister = () => {
  router.push({ name: "Register" }); // Navigate to the register page
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
