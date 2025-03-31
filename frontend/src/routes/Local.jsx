import Menu from "../components/layout/Menu";
import Rodape from "../components/layout/Rodape";
import "./Local.css";

export default () => {
  return (
    <div>
      <Menu />
      <div className="marmita">
        <img src="/loja.png" />
      </div>
      <br /> <br />
      <br />
      <br />
      <br />
      <div className="espaço">
        <h2>R. Arlindo Almeida, 27- Vila Leopoldina, SP</h2>
        <img src="/maps.png" />
      </div>
      <br />
      <br />
      <br />
      <Rodape />
    </div>
  );
};
