import { useEffect, useState } from "react";
import Rodape from "./layout/Rodape";
import { Link, useNavigate } from "react-router-dom";
import Status from "../constants/Status";
import Requisicao from "../utils/requisicao/Requisicao";
import Menu from "./layout/Menu";
import "./TabelaAdmin.css";
import CampoEntrada from "./entradas/CampoEntrada";
import { Helmet } from "react-helmet";

export default ({
  rota,
  cabecalho,
  definicaoCorpo,
  endpoint,
  titulo,
  campoPesquisa,
}) => {
  const [items, setItems] = useState([]);
  const [consulta, setConsulta] = useState("");

  async function obterItems() {
    const resposta = await Requisicao.obter(endpoint.listar);
    setItems(resposta.dados);
  }

  const navigate = useNavigate();

  useEffect(() => {
    obterItems();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{titulo} - Tabela</title>
      </Helmet>
      <Menu />
      <div className="container-tabela">
        <h1 className="titulo-tabela">{titulo}</h1>
        <div className="opcoes-tabela">
          <Link to={rota.adicionar}>
            <button className="botao-adicionar">adicionar</button>
          </Link>
          <div className="tabela-pesquisa">
            <CampoEntrada
              controller={{
                onChange: (e) => setConsulta(e.target.value),
                value: consulta,
              }}
              id="pesquisa"
              label="Pesquisar"
            />
          </div>
        </div>
        <table className="tabela-admin">
          <thead>
            <tr>
              <th>Id</th>
              {cabecalho.map((texto, i) => (
                <th key={i}>{texto}</th>
              ))}
              <th>Status</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter((item) =>
                campoPesquisa.some((campo) => {
                  console.log(item);
                  console.log(item[campo.split(" ")[0]]);
                  return (
                    campo.includes(" ")
                      ? item[campo.split(" ")[0]][campo.split(" ")[1]]
                      : item[campo]
                  )
                    .toLowerCase()
                    .includes(consulta.toLocaleLowerCase());
                })
              )
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  {definicaoCorpo(item)}
                  <td>{Status.obterNome(item.status)}</td>
                  <td>
                    <div className="container-botao-crud">
                      <Link to={rota.editar(item.id)}>
                        <button className="botao-crud">editar</button>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="container-botao-crud">
                      <button
                        onClick={async () => {
                          await Requisicao.obter(endpoint.deletar(item.id));
                          navigate(0);
                        }}
                        className="botao-crud"
                      >
                        deletar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Rodape />
    </div>
  );
};
