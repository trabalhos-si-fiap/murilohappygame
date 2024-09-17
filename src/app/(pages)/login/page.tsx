"use client";
import CampoCadastro from "@/components/CampoCadastro";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import toastAlert, { ToastPosition } from "@/utils/toastAlert";
import { useAuth } from "@/app/context/authProvider/useAuth";
import { AuthContext } from "@/app/context/authProvider";

export default function LoginPage() {
  const [verSenha, setVerSenha] = useState(false);
  const [usuarioLogin, setUsuarioLogin] = useState({ mail: "", password: "" });
  const router = useRouter();
  const auth = useAuth();

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    toastAlert("Carregando...", "info", ToastPosition.BOTTOM_RIGHT, 2500);

    const [response, mensagem] = await auth.authenticate(
      usuarioLogin.mail,
      usuarioLogin.password
    );

    if (mensagem == "200") {
      router.push("/catalogo");
      toastAlert("Usuário logado.", "success");
      console.log("Resposta da API: ", response);
      // setUser({...response})
    } else {
      toastAlert("Email ou senha incorretos.", "error");
    }
  }

  return (
    <>
      <ToastContainer />
        <div
          className="
        text-white flex items-center justify-center h-screen
        bg-orange-300"
        >
          <div
            className="
          flex flex-col w-3/12 gap-10 items-center py-14 h-[60%] rounded-lg
          bg-orange-400"
          >
            <h1 className="text-4xl font-black">Login</h1>

            <form onSubmit={logar} className="gap-7 flex flex-col">
              <CampoCadastro
                value={usuarioLogin.mail}
                tipo={"text"}
                nome={"mail"}
                id={"id_login_usuario"}
                placeholder={"Nome de usuario"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              <CampoCadastro
                value={usuarioLogin.password}
                tipo={"text"}
                nome={"password"}
                id={"id_login_senha"}
                placeholder={"Digite sua senha"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />

              <div className="flex flex-col justify-center items-center gap-10">
                <Link
                  href={"/catalogo"}
                >
                  <button
                    type="submit"
                    className="
                    bg-blue-500  w-80 px-12 py-2 rounded-lg 
                    hover:bg-blue-400
                    text-lg font-semibold
                    "
                    >
                    Log in
                  </button>
                </Link>

                <span>
                  Não possui uma conta?
                  <Link
                    href={"/cadastro"}
                    className="hover:text-blue-500 font-black"
                  >
                    {" "}
                    Cadastrar-se
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}
