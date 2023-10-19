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
              v-model="email"
              :rules="rules"
              type="email"
              label="Enter your email"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              v-model="code"
              :rules="rules"
              label="Enter the code"
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
            <v-btn
              type="submit"
              class="rounded-lg"
              color="primary"
              variant="tonal"
              block
              >Verify email</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

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
