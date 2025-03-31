import { useEffect, useState } from "react";
import FormularioAdmin from "../../../components/FormularioAdmin";
import Requisicao from "../../../utils/requisicao/Requisicao";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import Rotas from "../../../constants/Rotas";
import CampoEntrada from "../../../components/entradas/CampoEntrada";
import useForm from "../../../hooks/useForm";
import SelecaoEntrada from "../../../components/entradas/SelecaoEntrada";
import EntradaImagem from "../../../components/entradas/EntradaImagem";

export default () => {
  const [paises, setPaises] = useState([]);

  async function obterPaises() {
    const resposta = await Requisicao.obter(BackendEndPoints.paises.listar);
    console.log(resposta.dados);
    setPaises(resposta.dados);
  }

  useEffect(() => {
    obterPaises();
  }, []);

  const { valores, controllers, ceder, mudar } = useForm(
    {
      nome: "",
      preco: 0,
      categorias: [],
      descricao: "",
      pais: null,
      paisId: -1,
      status: -1,
      tipoPrato: "",
      imagem: [],
      imagemFormato: "",
    },
    {
      transformacao: {
        preco: (valor) => {
          console.log(isNaN(valor));
          return isNaN(valor == "" ? "f" : valor) ? valor : parseFloat(valor);
        },
      },
    }
  );

  useEffect(() => {
    if (valores.pais) {
      mudar("paisId", valores.pais.id);
    }
  }, [valores.pais]);

  console.log(valores);
  return (
    <FormularioAdmin
      titulo="Produtos"
      campos={
        <>
          <div className="capa-nome">
            <EntradaImagem
              mudar={(imagem) => {
                console.log(imagem);
                console.log(imagem.bytes);
                mudar("imagem", imagem.bytes);
                console.log(valores.imagem);
                mudar("imagemFormato", imagem.formato);
              }}
              link={
                valores.id
                  ? BackendEndPoints.produtos.imagem(valores.id)
                  : undefined
              }
              id="produto-imagem"
            />
            <CampoEntrada
              id="nome"
              controller={controllers.nome}
              label="Nome"
            />
          </div>
          <CampoEntrada
            id="descricao"
            controller={controllers.descricao}
            label="Descrição"
            multilinha
          />
          <CampoEntrada
            id="tipoPrato"
            controller={controllers.tipoPrato}
            label="Tipo de Prato"
          />
          <CampoEntrada
            id="preco"
            tipo="number"
            controller={controllers.preco}
            label="Preço"
          />
          <SelecaoEntrada
            controller={controllers.paisId}
            id="pais"
            label="País"
            padrao={-1}
            opcoes={paises.map((pais) => ({
              texto: pais.nome,
              valor: pais.id,
              extra: <i className={`fi fi-${pais.codigo}`}></i>,
            }))}
          />
        </>
      }
      ceder={ceder}
      endpoint={BackendEndPoints.produtos}
      rota={Rotas.admin.produtos}
      controllerStatus={controllers.status}
      valores={{ ...valores, pais: undefined }}
    />
  );
};
