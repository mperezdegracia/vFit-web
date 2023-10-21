import { Api } from "./api";

export class FavoriteApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/favourites${slug ? `/${slug}` : ""}`;
  }

  static async add(routine, controller) {
    return await Api.post(FavoriteApi.getUrl(routine.id), true, {}, controller);
  }

  static async delete(id, controller) {
    return await Api.delete(FavoriteApi.getUrl(id), true, controller);
  }

  static async getAll(params, controller) {
    const p = new URLSearchParams(params).toString();
    return await Api.get(
      FavoriteApi.getUrl(params ? `?${p}` : ""),
      true,
      controller
    );
  }
}
