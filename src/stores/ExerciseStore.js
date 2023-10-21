import { defineStore } from "pinia";
import { ExerciseApi } from "@/api/exercise";

export const useExerciseStore = defineStore("exercise", {
  state: () => ({ items: [] }),
  getters: {
    findIndex() {
      return (exercise) => {
        return this.items.findIndex((item) => item.id === exercise.id);
      };
    },
  },
  actions: {
    push(exercise) {
      this.items.push(exercise);
    },

    replace(index, exercise) {
      this.items[index] = exercise;
    },

    splice(index) {
      this.items.splice(index, 1);
    },

    replaceAll(exercise) {
      this.items = exercise;
    },

    async create(exercise) {
      const result = await ExerciseApi.add(exercise);
      if (!this.findIndex(result)) this.push(result);
      return result;
    },

    async modify(exercise) {
      const result = await ExerciseApi.modify(exercise);
      const index = this.findIndex(exercise);
      if (index >= 0) this.replace(index, exercise);
      return result;
    },

    async delete(exercise) {
      await ExerciseApi.delete(exercise.id);
      const index = this.findIndex(exercise);
      if (index >= 0) this.splice(index);
    },

    async get(exercise, params) {
      const index = this.findIndex(exercise);
      if (index >= 0) return this.items[index];

      const result = await ExerciseApi.get(exercise.id, params);
      this.push(result);
      return result;
    },

    async getAll(params, controller) {
      const result = await ExerciseApi.getAll(
        { size: 12, direction: "desc", ...params },
        controller
      );
      return result;
    },
  },
});
