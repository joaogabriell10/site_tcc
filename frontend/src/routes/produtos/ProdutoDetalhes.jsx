import { useEffect, useState } from "react";
import Menu from "../../components/layout/Menu";
import Rodape from "../../components/layout/Rodape";
import BackendEndPoints from "../../constants/BackendEndPoints";
import imprimirPreco from "../../utils/imprimirPreco";
import Requisicao from "../../utils/requisicao/Requisicao";
import { useParams } from "react-router-dom";
import BackendUrl from "../../constants/BackendUrl";
import "./ProdutoDetalhes.css";

export default () => {
  const { nome } = useParams();
  const [produto, setProduto] = useState({});
  async function obterProduto() {
    const resposta = await Requisicao.obter(
      BackendEndPoints.produtos.obterPorNome(nome.replaceAll("+", " "))
    );
    setProduto(resposta.dados);
  }
  useEffect(() => {
    obterProduto();
  }, []);
  const avaliacao =
    produto.avaliacoes?.reduce(
      (acumulacao, atual) => acumulacao + atual.nota,
      0
    ) / produto.avaliacoes?.length;

  return (
    <div>
      <Menu />

      <div class="principal">
        <h1 class="legenda">{produto.nome}</h1>
        <div className="container-imagem">
          <img
            class="chili"
            src={BackendUrl + BackendEndPoints.produtos.imagem(produto.id)}
          />
          <i className={`fi fi-${produto.pais?.codigo}`}></i>
        </div>

        <b className="descricao">
          <h3>Descrição:</h3>
          {produto?.descricao?.split("\n").map((paragrafo) => (
            <p>{paragrafo}</p>
          ))}
        </b>

        <div class="linha">
          <h6>
            Tipo de Prato: <div class="tipo">{produto.tipoPrato}</div>
          </h6>
          <div class="espaço">
            {isNaN(avaliacao) ? 0 : avaliacao}
            ★({produto.avaliacoes?.length})
          </div>
        </div>

        <div class="valor">
          <h2> {imprimirPreco(produto.preco)}</h2>
          <a href="inicio.html">
           <div class="img"> <img src="/comprar.png" /></div>
          </a>
        </div>
      </div>
      <Rodape />
    </div>
  );
};
