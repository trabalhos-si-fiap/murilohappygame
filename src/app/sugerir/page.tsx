import ElementoDeFormulario from "@/components/ElementoDeFormulario";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import TextAreaElement from "@/components/TextAreaElement";

export default function SugerirJogos() {
  return (
    <div className="flex flex-col ">
      <Header></Header>
      <div className="flex flex-col w-full">
        <h1 className="text-black font-black text-3xl py-5 text-center">
          Sugira um novo jogo!
        </h1>
        <div className=" flex h-screen w-full justify-center items-center my-14">
          <div className=" bg-gray-500 p-8 rounded-lg w-1/2">
            <form action="" className="flex flex-col gap-5">
              <ElementoDeFormulario
                id={"nome"}
                placeholder={"Digite seu nome aqui"}
              >
                <span>Nome:</span>
              </ElementoDeFormulario>
              <ElementoDeFormulario
                id={"email "}
                placeholder={"Digite seu email aqui"}
              >
                <span>Email:</span>
              </ElementoDeFormulario>
              <ElementoDeFormulario
                id={"categoria "}
                placeholder={"Digite aqui o gênero do jogo"}
              >
                <span>Categoria do jogo:</span>
              </ElementoDeFormulario>
              <ElementoDeFormulario
                id={"nome_do_jogo"}
                placeholder={"Digite o nome do jogo"}
              >
                <span>Nome do jogo:</span>
              </ElementoDeFormulario>
              <TextAreaElement
                id={"descricao"}
                placeholder={"Descrição breve a respeito do jogo sugerido"}
                className={"h-20"}
              >
                <span>Fale um pouco sobre o jogo:</span>
              </TextAreaElement>
              <ElementoDeFormulario
                id={"url_jogo "}
                placeholder={"Caso tenha, nos mande o link para o jogo"}
              >
                <span>URL do jogo:</span>
              </ElementoDeFormulario>
              <TextAreaElement
                id={"feedback"}
                placeholder={"Observações, sugestões, pedidos..."}
                className={"h-5"}
              >
                <span>
                  Caso tenha algo para comentar, fique à vontade para usar o
                  campo abaixo:
                </span>
              </TextAreaElement>
            </form>
            <div className="flex justify-center gap-40 p-3 mt-6">
              <button className="bg-green-600 px-8 py-3 rounded-md shadow-lg">
                Enviar
              </button>
              <button className="bg-red-600 px-8 py-3 rounded-md shadow-lg">
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
