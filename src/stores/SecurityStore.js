import { defineStore } from "pinia";
import { UserApi } from "@/api/user";
import { Api } from "@/api/api";
import { router } from "@/router";

const SECURITY_TOKEN_KEY = "security-token";

export const useSecurityStore = defineStore("security", {
  state: () => ({
    token: null,
    user: null,
    returnUrl: null,
  }),
  getters: {
    isLoggedIn() {
      return this.token != null;
    },
  },
  actions: {
    initialize() {
      const token = localStorage.getItem(SECURITY_TOKEN_KEY);
      if (token) this.setToken(token);
    },

    setUser(user) {
      this.user = user;
    },

    setToken(token) {
      this.token = token;
      Api.token = token;
    },

    updateToken(token, rememberMe) {
      if (rememberMe) localStorage.setItem(SECURITY_TOKEN_KEY, token);
      this.setToken(token);
    },

    removeToken() {
      localStorage.removeItem(SECURITY_TOKEN_KEY);
      this.setToken(null);
    },

    async register(user) {
      const result = await UserApi.register(user);
      this.user = result;
      router.push(`/verify-email?email=${user.email}`);
    },

    async sendVerification(email) {
      await UserApi.sendVerification({ email });
    },

    async verify(verificationCode) {
      await UserApi.verify(verificationCode);
      router.push("/login");
    },

    async login(credentials, rememberMe) {
      const result = await UserApi.login(credentials);
      this.updateToken(result.token, rememberMe);
      router.push(this.returnUrl || "/home");
    },

    async logout() {
      try {
        await UserApi.logout();
      } finally {
        this.removeToken();
        this.setUser(null);
        router.push("/login");
      }
    },

    async modify(user) {
      const result = await UserApi.modify(user);
      this.user = result;
      return result;
    },

    async getCurrentUser() {
      if (this.user) return this.user;
      const result = await UserApi.get();
      this.setUser(result);
      return result;
    },
  },
});
