import { useParams } from "react-router-dom";
import Rodape from "../../components/layout/Rodape";
import { useEffect, useState } from "react";
import Requisicao from "../../utils/requisicao/Requisicao";
import BackendEndPoints from "../../constants/BackendEndPoints";
import Prato from "../../components/item/Prato";
import Menu from "../../components/layout/Menu";
import BackendUrl from "../../constants/BackendUrl";
import "./PaisDetalhes.css";

export default () => {
  const [pais, setPais] = useState({});
  const { nome } = useParams();

  async function obterPais() {
    const resposta = await Requisicao.obter(
      BackendEndPoints.paises.obterPorNome(nome.replaceAll("+", " "))
    );
    console.log(resposta.dados);
    setPais(resposta.dados);
  }

  useEffect(() => {
    obterPais();
  }, []);

  return (
    <div>
      <Menu />
      
      <img
        className="desenho"
        src={BackendUrl + BackendEndPoints.paises.capa(pais.id)}
      />

      {/* <div className="legenda">
        <h1>
          <a href="#">Descrição </a> <div className="espaço">★★★★★</div>
        </h1>
      </div> */}

      <div className="prato">
        <h1>Pratos</h1>
      </div>

      <div className="conta">
        {pais?.produtos?.map((produto) => (
          <Prato {...produto} />
        ))}
      </div>
      <Rodape />
    </div>
  );
};
