import { Api } from "./api";

export class CycleExerciseApi {
  static getUrl(cycleId, slug) {
    return `${Api.baseUrl}/cycles/${cycleId}/exercises${
      slug ? `/${slug}` : ""
    }`;
  }

  static async add(cycleId, exerciseId, cycleExercise, controller) {
    return await Api.post(
      CycleExerciseApi.getUrl(cycleId, exerciseId),
      true,
      cycleExercise,
      controller
    );
  }

  static async modify(cycleId, cycleExercise, controller) {
    return await Api.put(
      CycleExerciseApi.getUrl(cycleId, cycleExercise.exercise.id),
      true,
      cycleExercise,
      controller
    );
  }

  static async delete(cycleId, id, controller) {
    return await Api.delete(
      CycleExerciseApi.getUrl(cycleId, id),
      true,
      controller
    );
  }

  static async get(cycleId, id, controller) {
    return await Api.get(
      CycleExerciseApi.getUrl(cycleId, id),
      true,
      controller
    );
  }

  static async getAll(cycleId, controller) {
    return await Api.get(CycleExerciseApi.getUrl(cycleId), true, controller);
  }
}

export class CycleExercise {
  constructor(order, duration, repetitions) {
    this.order = order;
    this.duration = duration;
    this.repetitions = repetitions;
  }
}
