import { defineStore } from "pinia";
import { CycleExerciseApi } from "@/api/cycleExercise";
import { useExerciseStore } from "./ExerciseStore";

export const useCycleExerciseStore = defineStore("cycleExercise", {
  state: () => ({ items: [] }),
  getters: {
    findIndex() {
      return (cycleExercise) => {
        return this.items.findIndex((item) => item.id === cycleExercise.id);
      };
    },
  },
  actions: {
    push(cycleExercise) {
      this.items.push(cycleExercise);
    },

    replace(index, cycleExercise) {
      this.items[index] = cycleExercise;
    },

    splice(index) {
      this.items.splice(index, 1);
    },

    replaceAll(cycleExercises) {
      this.items = cycleExercises;
    },

    async create(cycleId, exerciseId, cycleExercise) {
      const result = await CycleExerciseApi.add(
        cycleId,
        exerciseId,
        cycleExercise
      );
      if (this.findIndex(result) < 0) this.push(result);
      return result;
    },

    async modify(cycleId, cycleExercise) {
      const result = await CycleExerciseApi.modify(cycleId, cycleExercise);
      const index = this.findIndex(cycleExercise);
      if (index >= 0) this.replace(index, cycleExercise);
      return result;
    },

    async delete(cycleId, cycleExercise) {
      await CycleExerciseApi.delete(cycleId, cycleExercise.exercise.id);
      const index = this.findIndex(cycleExercise);
      if (index >= 0) this.splice(index);
    },

    async get(cycleId, cycleExercise) {
      const index = this.findIndex(cycleExercise);
      if (index >= 0) return this.items[index];

      const result = await CycleExerciseApi.get(
        cycleId,
        cycleExercise.exercise.id
      );
      this.push(result);
      return result;
    },

    async getAll(cycleId, controller) {
      const result = await CycleExerciseApi.getAll(cycleId, controller);
      this.replaceAll(result.content);
      return result;
    },
  },
});
