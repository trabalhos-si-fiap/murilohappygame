import { AxiosError } from "axios";


import Player from "@/app/domain/player";
import api from "@/services/api";
import { IUser } from "./types";

export interface UsuarioComToken extends Player {
  token : string
}


export async function loginRequest(email: string, password: string): Promise<UsuarioComToken | AxiosError | null> {
  try {
    console.log({ email, "senha": "protected" })
    const request = await api.post("/login", { "mail": email, "password": password },);
    console.log(request)
    return request.data ;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error;
    }
    return null;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    console.log({ email, "senha": password })
    const request = await api.post("/usuarios/cadastrar", { email, "senha": password },);
    return request.data;
  } catch (error) {
    console.error(error)
    return null;
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json){
    return null
  }

  const user = JSON.parse(json)
  return user ?? null;
}