"use client";
import Image from "next/image";
import bgImg from "../../../../public/static/imgs/bg-image.jpg";
import Link from "next/link";
import CampoCadastro from "@/components/CampoCadastro";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import CreatePlayer from "../../domain/player";
import toastAlert, { ToastPosition } from "@/utils/toastAlert";
import { cadastrarUsuario } from "@/services/services";
import { ToastContainer } from "react-toastify";



export default function PaginaDeCadastro() {
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const router = useRouter();
  const [usuario, setUsuario] = useState<CreatePlayer>({
    name: "",
    password: "",
    mail: "",
    birthDate: new Date(),
  });

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function estaValido() {
    if (
      validaSenha(usuario.password).length == 0 &&
      validaConfimarSenha(confirmaSenha).length == 0 &&
      validaEmail(usuario.mail).length == 0 &&
      validaNome(usuario.name).length == 0
    ) {
      return true;
    }
    return false;
  }

  function validaNome(nome: string) {
    const result = [];

    if (!isNaN(parseFloat(nome))) {
      result.push("Não pode conter apenas numeros");
    }
    return result;
  }

  function validaEmail(email: string) {
    const result = [];

    if (email.includes(" ")) {
      result.push("Email não pode conter espaços");
    }
    if (email && !email.includes("@")) {
      result.push("Email deve conter '@'");
    }
    if (email && !email.includes(".")) {
      result.push("Email deve conter '.'");
    }
    if (!isNaN(parseFloat(email))) {
      result.push("Não pode conter apenas numeros");
    }
    return result;
  }

  function validaSenha(senha: string) {
    const result = [];
    if (
      !senha.match(
        "^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>/?])(?=.*[A-Z])(?=\\S+$)(?!.*(012345678|00000000|11111111|22222222|33333333|44444444|55555555|66666666|77777777|88888888|99999999|123456789|23456789|3456789|987654321|87654321|7654321))[A-Za-z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>/?]{8,}$"
      )
    ) {
      result.push(
        "A senha deve conter 8 caracteres, ao menos uma letra maíuscula, um carácter especial e não pode ser sequencia."
      );
    }
    return result;
  }

  function validaConfimarSenha(senha: string) {
    const result = [];

    if (senha !== usuario.password) {
      result.push("As senhas não coincidem");
    }
    return result;
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    toastAlert("Carregando...", "info", ToastPosition.BOTTOM_RIGHT, 2500);

    const valido = estaValido();

    if (valido) {
      try {
        await cadastrarUsuario(`/player/register`, usuario, setUsuario);
        toastAlert("Usuário cadastrado com sucesso", "sucesso");
        router.push("/login");
      } catch (error) {
        toastAlert("Erro ao cadastrar o Usuário", "error", ToastPosition.BOTTOM_RIGHT, 2500);
      }
    } else {
      toastAlert(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "error",
        ToastPosition.BOTTOM_RIGHT,
        2500
      );
      setUsuario({ ...usuario, password: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <div className="w-1/2">
          <Image src={bgImg} alt="Backgrund" className="max-h-screen" />
        </div>
        <div className="w-5/6 bg-orange-400 shadow-2xl flex flex-col px-24 py-8 gap-5">
          <h1 className="text-3xl font-black">Crie a sua conta</h1>
          <form
            onSubmit={cadastrarNovoUsuario}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-3">
              <CampoCadastro
                nome={"name"}
                value={usuario.name}
                tipo={"text"}
                id={"id_nome"}
                placeholder={"Nome completo"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              {validaNome(usuario.name).map((mensagem) => {
                return (
                  <span key={1} className="text-black text-center pt-1">
                    {mensagem}
                  </span>
                );
              })}
              <CampoCadastro
                nome={"mail"}
                value={usuario.mail}
                tipo={"email"}
                id={"id_email"}
                placeholder={"Endereço de email"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              {validaEmail(usuario.mail).map((mensagem) => {
                return (
                  <span key={1} className="text-black text-center pt-1">
                    {mensagem}
                  </span>
                );
              })}
              <CampoCadastro
                nome={"birthDate"}
                value={usuario.birthDate}
                tipo={"date"}
                id={"id_dtnasc"}
                placeholder={"Data de nascimento"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              {/* <CampoCadastro
             tipo        = {"text"}
             nome        = {"usuario"}
             id          = {"id_usuario"}
             placeholder = {"Nome de usuário"}
             /> */}
              <CampoCadastro
                value={usuario.password}
                tipo={"password"}
                nome={"password"}
                id={"id_senha"}
                placeholder={"Digite uma senha"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              {usuario.password &&
                validaSenha(usuario.password).map((mensagem) => {
                  return (
                    <span key={1} className="text-black text-center pt-1">
                      {mensagem}
                    </span>
                  );
                })}
              <CampoCadastro
                tipo={"password"}
                nome={"confirmarSenha"}
                id={"id_conf_senha"}
                placeholder={"Confirmar senha"}
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
              {validaConfimarSenha(confirmaSenha).map((mensagem) => {
                return (
                  <span key={1} className="text-black text-center pt-1">
                    {mensagem}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="termos_de_uso" id="id_termos" />
                <label htmlFor="id_termos">Li e aceito os<a target="blank" rel="noopener noreferrer" className="font-black" href="/static/pdfs/termos-de-uso.pdf"> termos de uso</a></label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="autorizacao_parental"
                  id="id_parental"
                />
                <label htmlFor="id_parental">
                   Li e aceito os <a target="blank" rel="noopener noreferrer" href="/static/pdfs/aut-parental.pdf" className="font-black"> termos de autorização para menores de idade</a>
                </label>
              </div>
            </div>

            <div class="g-recaptcha" data-sitekey="6LdvcUcqAAAAABcS1K18olWeoLh_Ipl1-07Zvxxd"></div>
            <button
              type="submit"
              className="
            border-none bg-blue-500 py-2 w-1/2 rounded-md items-center m-auto
            hover:bg-blue-400"
            >
              Continuar
            </button>
          </form>
          <span>
            Já tem uma conta?{" "}
            <Link href={"/login"} className=" font-black hover:text-blue-500">
              Entrar
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
