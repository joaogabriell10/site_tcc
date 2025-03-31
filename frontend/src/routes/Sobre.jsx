import Menu from "../components/layout/Menu";
import Rodape from "../components/layout/Rodape";
import "./Sobre.css";

export default () => {
  return (
    <div>
      <Menu />
      <h1>Sobre Nós</h1>
      <div className="marmita">
        <img src="marmita.png" />
      </div>
      <h6>
        Nossa equipe tomou a iniciativa e transformou essa incrível idéia em
        realidade pois enxergavamos problemas em comidas congeladas que
        encontramos em distintos lugares á venda, como comidas sem cor, com
        sabor industrializado e sem criatividade, algo nada fora do comum por
        mais prático que seja. Então criamos a Dish of the World, onde
        oferecemos aos nossos clientes experiências únicas e práticas em nossos
        pratos, comidas típicas e com muita personalidade de diversas partes do
        mundo, e tudo isso sem sair do conforto da sua casa.{" "}
      </h6>

      <h6>
        Nosso intuito é não só resolver o problema citado mas também trazer algo
        novo e fora da rotina paras os nossos estimados clientes.
      </h6>
      <Rodape />
    </div>
  );
};
