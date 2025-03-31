import TabelaAdmin from "../../../components/TabelaAdmin";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import Rotas from "../../../constants/Rotas";

export default () => {
  return (
    <TabelaAdmin
      cabecalho={["Produto Nome", "Usuário Email", "Nota", "Comentário"]}
      titulo="Avaliações"
      campoPesquisa={["usuario email", "produto nome", "comentario"]}
      definicaoCorpo={(item) => (
        <>
          <td>{item.produto.nome}</td>
          <td>{item.usuario.email}</td>
          <td>{item.nota}</td>
          <td>{item.comentario}</td>
        </>
      )}
      endpoint={BackendEndPoints.avaliacoes}
      rota={Rotas.admin.avaliacoes}
    />
  );
};
