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
          v-model="email"
          :rules="rules"
          type="email"
          label="Ingrese su correo electrónico"
          prepend-inner-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          v-model="code"
          :rules="rules"
          label="Ingrese el código recibido"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <v-btn
          type="submit"
          class="rounded-lg"
          color="primary"
          variant="tonal"
          block
          :loading="loading"
          >Verificar correo electrónico</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";
import { VerificationCode } from "@/api/user";

export default {
  data: () => ({
    loading: false,
    email: "",
    code: "",
    error: null,

    rules: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
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
      this.loading = true;

      try {
        const verificationCode = new VerificationCode(this.email, this.code);
        await this.$verify(verificationCode);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    },
  },
};
</script>
