<template>
  <v-card elevation="0" class="w-25 mx-auto custom_card ">
    <div class="text-center">
      <a href="http://localhost:3000/home" name="Fedorae Education" title="Fedorae Education" target="_blank">
        <v-img src="@/assets/logo.png" alt="Fedorae Education Log" contain height="250"></v-img>
      </a>
    </div>
    <v-card-text>
      <v-form>
        <v-text-field label="Enter your name" name="name" prepend-inner-icon="mdi-account" type="text" class="rounded-0"
          outlined></v-text-field>
        <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0"
          outlined></v-text-field>
        <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password"
          class="rounded-0" outlined></v-text-field>
        <v-text-field label="Confirm your password" name="confirmPassword" prepend-inner-icon="mdi-lock" type="password"
          class="rounded-0" outlined></v-text-field>
        <v-btn class="rounded-lg mx-auto w-50" color="primary" variant="tonal" >Sign Up</v-btn>
        <v-btn class="rounded-circle ml-10 text-button " variant="tonal" color="secondary" >
          <v-icon >mdi-google</v-icon> 
        </v-btn>
        <v-card-actions class="d-flex align-center justify-center flex-wrap">
          <v-checkbox color="primary" class="" label="I agree to the terms and conditions"></v-checkbox>
          <p class="text-h5">Already have an account?</p>
          <v-btn @click="navigateToLogin" color="secondary" x-large block dark variant="tonal" class="ml-5 mb-4">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
    <v-card-actions class="text-center flex-column">
      <p>
        By continuing, you agree to vFit's
        <br>
        <a href="#" class="terms-link">Policy</a>
        and
        <a href="#" class="terms-link">Terms of Use</a>
      </p>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateToLogin = () => {
  router.push({ name: 'Login' }); // Navigate to the register page
};
</script>
<style scoped>
.v-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.v-card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.v-text-field {
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}

.v-card-actions {
  margin-top: 30px;
}

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
.v-btn.rounded-circle {
  width: 20px;
  height: 60px;
  margin-top: 20px;
}
</style>