import { Api } from "./api";

export class CycleApi {
  static getUrl(routineId, slug) {
    return `${Api.baseUrl}/routines/${routineId}/cycles${
      slug ? `/${slug}` : ""
    }`;
  }

  static async add(routineId, cycle, controller) {
    return await Api.post(CycleApi.getUrl(routineId), true, cycle, controller);
  }

  static async modify(routineId, cycle, controller) {
    return await Api.put(
      CycleApi.getUrl(routineId, cycle.id),
      true,
      cycle,
      controller
    );
  }

  static async delete(routineId, id, controller) {
    return await Api.delete(CycleApi.getUrl(routineId, id), true, controller);
  }

  static async get(routineId, id, controller) {
    return await Api.get(CycleApi.getUrl(routineId, id), true, controller);
  }

  static async getAll(routineId, controller) {
    return await Api.get(
      CycleApi.getUrl(routineId, "?orderBy=order"),
      true,
      controller
    );
  }
}

export class Cycle {
  constructor(name, detail, type, order, repetitions) {
    this.name = name;
    this.detail = detail;
    this.type = type;
    this.order = order;
    this.repetitions = repetitions;
  }
}
