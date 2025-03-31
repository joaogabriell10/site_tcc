import { useNavigate, useParams } from "react-router-dom";
import Requisicao from "../utils/requisicao/Requisicao";
import Menu from "./layout/Menu";
import Rodape from "./layout/Rodape";
import { useEffect, useState } from "react";
import "./FormularioAdmin.css";
import { Helmet } from "react-helmet";
import SelecaoEntrada from "./entradas/SelecaoEntrada";

export default ({
  valores,
  ceder,
  rota,
  endpoint,
  campos,
  titulo,
  controllerStatus,
}) => {
  const [mensagem, setMensagem] = useState("");
  const { id } = useParams();
  async function obterValores() {
    const resposta = await Requisicao.obter(endpoint.obter(id));
    console.log(resposta.dados);
    ceder(resposta.dados);
  }

  useEffect(() => {
    if (id) obterValores();
  }, [id]);

  const navigate = useNavigate();

  return (
    <div>
      <Menu />
      <Helmet>
        <title>{titulo} - Formulário</title>
      </Helmet>
      <div className="container-formulario">
        <form
          className="formulario-admin"
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const resposta = await Requisicao.enviar(
                endpoint.salvar,
                valores
              );
              setMensagem("");
              navigate(rota.lista);
            } catch (e) {
              setMensagem("formulário invalido");
            }
          }}
        >
          <h1 className="formulario-titulo">{titulo}</h1>
          {campos}
          <SelecaoEntrada
            padrao={-1}
            controller={controllerStatus}
            label="Status"
            id="status"
            opcoes={[
              {
                texto: "ATIVO",
                valor: 1,
              },
              {
                texto: "INATIVO",
                valor: 0,
              },
            ]}
          />
          <h4 className="form-erro">{mensagem}</h4>
          <div className="formulario-opcoes">
            <button type="submit">salvar</button>
            <button
              className="form-cancelar"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              cancelar
            </button>
          </div>
        </form>
      </div>
      <Rodape />
    </div>
  );
};
