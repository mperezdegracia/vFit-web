import { useAuthStore } from "@/store/auth.store";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return async (url, body) => {
    const requestOpts = {
      method,
      headers: authHeader(url),
    };

    if (body) {
      requestOpts.headers["Content-Type"] = "application/json";
      requestOpts.body = JSON.stringify(body);
    }
    const response = await fetch(url, requestOpts);
    console.log(requestOpts);
    console.log(response);
    return handleResponse(response);
  };
}

function authHeader(url) {
  const { user } = useAuthStore();
  const isLoggedIn = !!user?.token;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);

  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

async function handleResponse(response) {
  const isJson = response.headers
    ?.get("content-type")
    ?.includes("application/json");
  const data = isJson
    ? await response.json().catch((error) => {
      if (response.ok) return null;
      throw error;
    })
    : null;

  if (!response.ok) {
    const { user, logout } = useAuthStore();

    if ([401, 403].includes(response.status) && user) {
      logout();
    }

    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }
  return data;
}
