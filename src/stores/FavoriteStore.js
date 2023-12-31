import { defineStore } from "pinia";
import { FavoriteApi } from "@/api/favorite";

export const useFavoriteStore = defineStore("favorite", {
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
      await FavoriteApi.add(routine);
      if (this.findIndex(routine) < 0) this.push(routine);
    },

    async delete(routine) {
      await FavoriteApi.delete(routine.id);
      const index = this.findIndex(routine);
      if (index >= 0) this.splice(index);
    },

    async getAll(params, controller) {
      const result = await FavoriteApi.getAll(
        { size: 12, ...params },
        controller
      );
      this.replaceAll(result.content);
      return result;
    },
  },
});
