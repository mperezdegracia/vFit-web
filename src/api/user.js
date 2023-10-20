import { Api } from "./api";

export class UserApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/users${slug ? `/${slug}` : ""}`;
  }

  static async register(user, controller) {
    return await Api.post(UserApi.getUrl(), false, user, controller);
  }

  static async sendVerification(data, controller) {
    return await Api.post(
      UserApi.getUrl("resend_verification"),
      true,
      data,
      controller
    );
  }

  static async verify(verificationCode, controller) {
    return await Api.post(
      UserApi.getUrl("verify_email"),
      false,
      verificationCode,
      controller
    );
  }

  static async login(credentials, controller) {
    return await Api.post(
      UserApi.getUrl("login"),
      false,
      credentials,
      controller
    );
  }

  static async logout(controller) {
    await Api.post(UserApi.getUrl("logout"), true, controller);
  }

  static async modify(user, controller) {
    return Api.put(UserApi.getUrl("current"), true, user, controller);
  }

  static async get(controller) {
    return Api.get(UserApi.getUrl("current"), true, controller);
  }
}

export class Credentials {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

export class User {
  constructor(
    username,
    email,
    password,
    firstName,
    lastName,
    gender,
    birthdate,
    phone,
    avatarUrl
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
    this.phone = phone;
    this.avatarUrl = avatarUrl;
  }
}

export class VerificationCode {
  constructor(email, code) {
    this.email = email;
    this.code = code;
  }
}
