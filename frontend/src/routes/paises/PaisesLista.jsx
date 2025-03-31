import { useEffect, useState } from "react";
import BackendEndPoints from "../../constants/BackendEndPoints";
import Pais from "../../components/item/Pais";
import Menu from "../../components/layout/Menu";
import Rodape from "../../components/layout/Rodape";
import Requisicao from "../../utils/requisicao/Requisicao";

export default () => {
  const [paises, setPaises] = useState([]);
  async function obterPaises() {
    const resposta = await Requisicao.obter(
      BackendEndPoints.paises.listarParaCliente
    );
    console.log(resposta);
    setPaises(resposta.dados);
  }
  useEffect(() => {
    obterPaises();
  }, []);
  return (
    <div>
      <Menu />
      <div className="conta">
        {paises.map((pais) => (
          <Pais key={pais.id} {...pais} />
        ))}
      </div>
      <Rodape />
    </div>
  );
};
