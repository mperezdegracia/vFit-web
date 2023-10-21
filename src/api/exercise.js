import { Api } from "./api";

export class ExerciseApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/exercises${slug ? `/${slug}` : ""}`;
  }

  static async add(exercise, controller) {
    return await Api.post(ExerciseApi.getUrl(), true, exercise, controller);
  }

  static async modify(exercise, controller) {
    return await Api.put(
      ExerciseApi.getUrl(exercise.id),
      true,
      exercise,
      controller
    );
  }

  static async delete(id, controller) {
    return await Api.delete(ExerciseApi.getUrl(id), true, controller);
  }

  static async get(id, controller) {
    return await Api.get(ExerciseApi.getUrl(id), true, controller);
  }

  static async getAll(params, controller) {
    const p = new URLSearchParams(params).toString();
    return await Api.get(
      ExerciseApi.getUrl(params ? `?${p}` : ""),
      true,
      controller
    );
  }
}

export class Exercise {
  constructor(name, detail, type, metadata) {
    this.name = name;
    this.detail = detail;
    this.type = type;
    this.metadata = metadata;
  }
}
