import { useEffect, useState } from "react";
import Menu from "../../../components/layout/Menu";
import Rodape from "../../../components/layout/Rodape";
import Requisicao from "../../../utils/requisicao/Requisicao";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import { Link } from "react-router-dom";
import Rotas from "../../../constants/Rotas";
import TabelaAdmin from "../../../components/TabelaAdmin";

export default () => {
  return (
    <TabelaAdmin
      campoPesquisa={["nome", "email"]}
      titulo="Usuários"
      cabecalho={["Nome", "Email", "Nivel Acesso", "CPF", "telefone"]}
      definicaoCorpo={(item) => (
        <>
          <td>{item.nome}</td>
          <td>{item.email}</td>
          <td>{item.nivelAcesso}</td>
          <td>{item.cpf}</td>
          <td>{item.telefone}</td>
        </>
      )}
      endpoint={BackendEndPoints.usuarios}
      rota={Rotas.admin.usuarios}
    />
  );
};
