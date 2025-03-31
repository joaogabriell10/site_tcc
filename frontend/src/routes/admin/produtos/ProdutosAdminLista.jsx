import TabelaAdmin from "../../../components/TabelaAdmin";
import Menu from "../../../components/layout/Menu";
import Rodape from "../../../components/layout/Rodape";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import BackendUrl from "../../../constants/BackendUrl";
import Rotas from "../../../constants/Rotas";
import imprimirPreco from "../../../utils/imprimirPreco";
import "./ProdutosAdminLista.css";

export default () => {
  return (
    <TabelaAdmin
      titulo="Produtos"
      campoPesquisa={["nome", "pais nome"]}
      cabecalho={[
        "Nome",
        "Imagem",
        "Imagem Formato",
        "Preço",
        "País",
        "Tipo de prato",
      ]}
      definicaoCorpo={(item) => (
        <>
          <td>{item.nome}</td>
          <td>
            <img src={BackendUrl + BackendEndPoints.produtos.imagem(item.id)} />
          </td>
          <td>{item.imagemFormato}</td>
          <td>{imprimirPreco(item.preco)}</td>
          <td>
            <div className="pais-origem">
              <i className={`fi fi-${item.pais.codigo}`}></i>
              {item.pais.nome}
            </div>
          </td>
          <td>{item.tipoPrato}</td>
        </>
      )}
      endpoint={BackendEndPoints.produtos}
      rota={Rotas.admin.produtos}
    />
  );
};
