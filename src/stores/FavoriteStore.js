import { defineStore } from "pinia";
import { FavoriteApi } from "@/api/favorite";
import { useRoutineStore } from "./RoutineStore";

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
      try {
        routine.metadata = { liked: true };
        const routineStore = useRoutineStore();
        await routineStore.modify(routine);
      } catch (e) {
        console.error(e);
      }

      const result = await FavoriteApi.add(routine);
      if (!this.findIndex(result)) this.push(result);
      return result;
    },

    async delete(routine) {
      try {
        routine.metadata.liked = false;
        const routineStore = useRoutineStore();
        await routineStore.modify(routine);
      } catch (e) {
        console.error(e);
      }

      await FavoriteApi.delete(routine.id);
      const index = this.findIndex(routine);
      if (index >= 0) this.splice(index);
    },

    async getAll(controller) {
      const result = await FavoriteApi.getAll(controller);
      this.replaceAll(result.content);
      return result;
    },
  },
});
