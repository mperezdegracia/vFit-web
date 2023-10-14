import { defineStore } from "pinia";

import { fetchWrapper } from "@/helpers/fetchWrapper";
import { router } from "@/router";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.stringify(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async register(username, email, password) {
      try {
        await fetchWrapper.post(baseUrl, {
          username,
          email,
          password,
        });
        router.push(`/verify-email?email=${email}`);
      } catch (error) {
        console.log("error register: " + error);
      }
    },

    async verify(email, code) {
      try {
        await fetchWrapper.post(`${baseUrl}/verify_email`, { email, code });
        router.push("/login");
      } catch (error) {
        console.log("error verify: " + error);
      }
    },

    async login(username, password) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/login`, {
          username,
          password,
        });
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        router.push(this.returnUrl || "/home");
      } catch (error) {
        console.log("error auth: " + error);
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});
