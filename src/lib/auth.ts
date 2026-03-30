import { apiAuth } from "./api";

const ACCESS_TOKEN_KEY = "accessToken";

interface LoginPayload {
  username: string;
  password: string;
  captchaToken?: string;
}

interface LoginUser {
  id_user?: number | string | null;
  id_mahasiswa?: number | string | null;
  id_dosen?: number | string | null;
  username?: string | null;
  jenis_akun?: string | null;
  nama_lengkap_akun?: string | null;
}

interface LoginResponse {
  status?: number;
  data?: {
    token?: string;
    type?: string;
    user?: LoginUser;
  };
  message?: string;
}

export interface SessionUser {
  idUser: string | null;
  idMahasiswa: string | null;
  username: string | null;
  namaLengkap: string | null;
  role: string | null;
}

export function isAuthenticated(): boolean {
  return Boolean(sessionStorage.getItem(ACCESS_TOKEN_KEY));
}

export function getSessionUser(): SessionUser {
  return {
    idUser: sessionStorage.getItem("id"),
    idMahasiswa: sessionStorage.getItem("mhs"),
    username: sessionStorage.getItem("username"),
    namaLengkap: sessionStorage.getItem("nama_lengkap"),
    role: sessionStorage.getItem("role"),
  };
}

export function clearAuthSession(): void {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("mhs");
  sessionStorage.removeItem("id_dosen");
  sessionStorage.removeItem("akun");
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("nama_lengkap");
}

export async function loginMahasiswa({
  username,
  password,
  captchaToken,
}: LoginPayload): Promise<void> {
  const payload: Record<string, string> = {
    username,
    password,
  };

  if (captchaToken) {
    payload["cf-turnstile-response"] = captchaToken;
  }

  const rawData = await apiAuth<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (rawData?.status !== undefined && rawData.status !== 200) {
    throw new Error(rawData?.message ?? "Login gagal. Cek username/password.");
  }

  const token = rawData?.data?.token;
  const user = rawData?.data?.user;

  if (!token || !user) {
    throw new Error("Respons login tidak valid.");
  }

  // Endpoint ini dipakai untuk banyak role, tapi app ini hanya mengizinkan mahasiswa.
  const jenisAkun = String(user.jenis_akun ?? "").toLowerCase();
  if (
    user.id_mahasiswa === null ||
    user.id_mahasiswa === undefined ||
    (jenisAkun && jenisAkun !== "mahasiswa")
  ) {
    throw new Error("Akun ini bukan akun mahasiswa.");
  }

  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  sessionStorage.setItem("id", String(user.id_user ?? ""));
  sessionStorage.setItem("mhs", String(user.id_mahasiswa));
  sessionStorage.setItem("id_dosen", String(user.id_dosen ?? ""));
  sessionStorage.setItem("akun", String(user.jenis_akun ?? "mahasiswa"));
  sessionStorage.setItem("role", "mahasiswa");
  sessionStorage.setItem("username", String(user.username ?? username));
  sessionStorage.setItem("nama_lengkap", String(user.nama_lengkap_akun ?? ""));
}