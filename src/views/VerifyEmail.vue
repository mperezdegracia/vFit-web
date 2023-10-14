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
          v-model="code"
          :rules="rules"
          label="Enter your code"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <v-btn
          type="submit"
          class="rounded-lg mt-2"
          color="primary"
          variant="tonal"
          x-large
          block
          dark
          >Verify email</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

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

<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth.store";

export default {
  data: () => ({
    code: "",
    email: "",

    rules: [
      (value) => {
        if (value) return true;
        return "This field is required.";
      },
    ],
  }),
  mounted() {
    const router = useRouter();
    if (!this.$route.query.email) {
      router.push({ name: "Home" });
    }
    this.email = this.$route.query.email;
  },
  methods: {
    async submit(event) {
      const results = await event;
      if (!results.valid) return;
      const authStore = useAuthStore();
      await authStore.verify(this.email, this.code);
    },
  },
};
</script>
