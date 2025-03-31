import { useEffect, useState } from "react";
import Requisicao from "../../utils/requisicao/Requisicao";
import BackendEndPoints from "../../constants/BackendEndPoints";
import { useParams, useSearchParams } from "react-router-dom";
import Menu from "../../components/layout/Menu";
import Rodape from "../../components/layout/Rodape";
import Prato from "../../components/item/Prato";

export default () => {
  const [params] = useSearchParams();
  const consulta = params.get("q");
  const [produtos, setProdutos] = useState([]);
  async function obterProdutos() {
    const resposta = await Requisicao.obter(
      BackendEndPoints.produtos.buscar(consulta)
    );
    setProdutos(resposta.dados);
  }
  useEffect(() => {
    obterProdutos();
  }, [consulta]);

  return (
    <div>
      <Menu />
      <div className="conta">
        {produtos.map((produto) => (
          <Prato {...produto} />
        ))}
      </div>
      <Rodape />
    </div>
  );
};
