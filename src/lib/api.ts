type ApiDomain = "akademik" | "auth" | "finance";

interface ApiResponseShape {
  message?: string;
}

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(message: string, status = 0, payload: unknown = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

interface ApiRequestOptions extends RequestInit {
  withAuth?: boolean;
}

const DOMAIN_BASE_URLS: Record<ApiDomain, string> = {
  akademik: import.meta.env.DEV
    ? "/akademik"
    : (import.meta.env.VITE_BASE_URL_AKADEMIK as string | undefined) ??
      "https://newapidevkiisakademik.ibik.ac.id",
  auth: import.meta.env.DEV
    ? "/auth"
    : (import.meta.env.VITE_BASE_URL_AUTH as string | undefined) ??
      "https://newapidevkiismanajemenuser.ibik.ac.id",
  finance: import.meta.env.DEV
    ? "/finance"
    : (import.meta.env.VITE_BASE_URL_FINANCE as string | undefined) ??
      "https://newapidevkiisfinance.ibik.ac.id",
};

function normalizePath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

function resolveMessage(domain: ApiDomain, fallback: string): string {
  if (domain === "auth") {
    return "Gagal terhubung ke server auth. Kemungkinan CORS/jaringan, coba refresh lalu login lagi.";
  }

  return fallback;
}

async function requestJson<T>(
  domain: ApiDomain,
  path: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { withAuth = true, headers, ...restOptions } = options;
  const token = sessionStorage.getItem("accessToken");

  const requestHeaders = new Headers(headers ?? {});
  if (!requestHeaders.has("Content-Type") && restOptions.body) {
    requestHeaders.set("Content-Type", "application/json");
  }
  if (withAuth && token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  let response: Response;
  try {
    response = await fetch(
      `${DOMAIN_BASE_URLS[domain]}${normalizePath(path)}`,
      {
        ...restOptions,
        headers: requestHeaders,
      }
    );
  } catch {
    throw new ApiError(
      resolveMessage(domain, "Gagal terhubung ke server."),
      0,
      null
    );
  }

  const responseText = await response.text();
  let payload: unknown = null;

  if (responseText) {
    try {
      payload = JSON.parse(responseText);
    } catch {
      if (!response.ok) {
        throw new ApiError(
          "Server mengembalikan format respons yang tidak dikenali.",
          response.status,
          responseText
        );
      }
    }
  }

  if (!response.ok) {
    const payloadMessage =
      typeof payload === "object" && payload !== null
        ? (payload as ApiResponseShape).message
        : undefined;

    throw new ApiError(
      payloadMessage ?? "Permintaan ke server gagal.",
      response.status,
      payload
    );
  }

  return payload as T;
}

export function apiAuth<T>(path: string, options: ApiRequestOptions = {}) {
  return requestJson<T>("auth", path, {
    withAuth: options.withAuth ?? false,
    ...options,
  });
}

export function apiAkademik<T>(path: string, options: ApiRequestOptions = {}) {
  return requestJson<T>("akademik", path, options);
}

export function apiFinance<T>(path: string, options: ApiRequestOptions = {}) {
  return requestJson<T>("finance", path, options);
}
