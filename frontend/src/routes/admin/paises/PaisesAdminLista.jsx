import { useEffect, useState } from "react";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import Requisicao from "../../../utils/requisicao/Requisicao";
import Menu from "../../../components/layout/Menu";
import Status from "../../../constants/Status";
import Rodape from "../../../components/layout/Rodape";
import { Link } from "react-router-dom";
import Rotas from "../../../constants/Rotas";
import TabelaAdmin from "../../../components/TabelaAdmin";
import BackendUrl from "../../../constants/BackendUrl";

export default () => {
  return (
    <TabelaAdmin
      campoPesquisa={["nome"]}
      titulo="Países"
      rota={Rotas.admin.paises}
      cabecalho={["Nome", "Código", "Capa", "Capa Formato"]}
      definicaoCorpo={(item) => (
        <>
          <td>{item.nome}</td>
          <td>
            <i className={`fi fi-${item.codigo}`}></i>
            {item.codigo}
          </td>
          <td>
            <img src={BackendUrl + BackendEndPoints.paises.capa(item.id)} />
          </td>
          <td>{item.capaFormato}</td>
        </>
      )}
      endpoint={BackendEndPoints.paises}
    />
  );
};
