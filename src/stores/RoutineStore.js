import { defineStore } from "pinia";
import { RoutineApi } from "@/api/routine";
import { useSecurityStore } from "./SecurityStore";

export const useRoutineStore = defineStore("routine", {
  state: () => ({ items: [] }),
  getters: {
    findIndex() {
      return (routine) => {
        return this.items.findIndex((item) => item.id === routine.id);
      };
    },
  },
  actions: {
    push(routine) {
      this.items.push(routine);
    },

    replace(index, routine) {
      this.items[index] = routine;
    },

    splice(index) {
      this.items.splice(index, 1);
    },

    replaceAll(routines) {
      this.items = routines;
    },

    async create(routine) {
      const result = await RoutineApi.add(routine);
      if (this.findIndex(result) < 0) this.push(result);
      return result;
    },

    async modify(routine) {
      const result = await RoutineApi.modify(routine);
      const index = this.findIndex(routine);
      if (index >= 0) this.replace(index, routine);
      return result;
    },

    async delete(routine) {
      await RoutineApi.delete(routine.id);
      const index = this.findIndex(routine);
      if (index >= 0) this.splice(index);
    },

    async get(routine) {
      const index = this.findIndex(routine);
      if (index >= 0) return this.items[index];

      const result = await RoutineApi.get(routine.id);
      this.push(result);
      return result;
    },

    async getAll(params, controller) {
      const result = await RoutineApi.getAll(
        { size: 12, direction: "desc", ...params },
        controller
      );
      this.replaceAll(result.content);
      return result;
    },

    async getMyRoutines(params) {
      const securityStore = useSecurityStore();
      const user = await securityStore.getCurrentUser();
      return await this.getAll({ userId: user.id, ...params });
    },
  },
});
