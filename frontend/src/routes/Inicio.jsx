import { useEffect, useState } from "react";
import Pais from "../components/item/Pais";
import Prato from "../components/item/Prato";
import Menu from "../components/layout/Menu";
import Rodape from "../components/layout/Rodape";
import "./Inicio.css";
import { Helmet } from "react-helmet";
import Requisicao from "../utils/requisicao/Requisicao";
import BackendEndPoints from "../constants/BackendEndPoints";

export default () => {
  const [experimente, setExperimente] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [procurados, setProcurados] = useState([]);
  async function obterExperimente() {
    const respostas = await Requisicao.obter(
      BackendEndPoints.produtos.experimente
    );
    const respostaFavoritos = await Requisicao.obter(
      BackendEndPoints.produtos.favoritos
    );
    const respostaProcurados = await Requisicao.obter(
      BackendEndPoints.paises.procurados
    );
    setExperimente(respostas.dados);
    setFavoritos(respostaFavoritos.dados);
    setProcurados(respostaProcurados.dados);
  }
  useEffect(() => {
    obterExperimente();
  }, []);
  return (
    <div>
      <Menu />
      <div className="design">
        <img className="desigo" src="desenho.png" />
      </div>
      <div className="legenda">
        <h2>Marmitas favoritas do clientes ★ </h2>
      </div>
      <div className="conta">
        {favoritos.map((favorito) => (
          <Prato {...favorito} />
        ))}
      </div>
      <div className="legenda">
        <h2>Países Mais Procurados </h2>
      </div>
      <div className="alinhamento">
        <div className="conta">
          {procurados.map((procurado) => (
            <Pais {...procurado} />
          ))}
        </div>
      </div>
      <div className="legenda">
        <h2>Experimente Também </h2>
      </div>

      <div className="conta">
        {experimente.map((produto) => (
          <Prato {...produto} />
        ))}
      </div>
      <Rodape />
    </div>
  );
};
