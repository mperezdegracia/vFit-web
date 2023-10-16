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

        <v-text-field v-model="email" :rules="rules" type="email" label="Enter your email"
          prepend-inner-icon="mdi-email"></v-text-field>
        <v-text-field v-model="code" :rules="rules" label="Enter the code" prepend-inner-icon="mdi-lock"></v-text-field>
        <v-btn type="submit" class="rounded-lg" color="primary" variant="tonal" block>Verify email</v-btn>
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

<script>
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";
import { VerificationCode } from "@/api/user";

export default {
  data: () => ({
    email: "",
    code: "",
    error: null,

    rules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
    ],
  }),
  mounted() {
    if (this.$route.query.email) this.email = this.$route.query.email;
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $verify: "verify",
    }),

    async submit(event) {
      const results = await event;
      if (!results.valid) return;

      try {
        const verificationCode = new VerificationCode(this.email, this.code);
        await this.$verify(verificationCode);
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>
