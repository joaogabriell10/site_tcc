import { Link } from "react-router-dom";
import BackendEndPoints from "../../constants/BackendEndPoints";
import BackendUrl from "../../constants/BackendUrl";
import Rotas from "../../constants/Rotas";
import imprimirPreco from "../../utils/imprimirPreco";

export default ({ id, preco, nome, pais }) => {
  return (
    <div className="produto">
      <div className="risoto">
        <img
          src={BackendUrl + BackendEndPoints.produtos.imagem(id)}
          alt={nome}
        />
      </div>
      <p>{nome}</p>
      <h7>{imprimirPreco(preco)}</h7> <br />
      <i style={{ fontSize: "2rem" }} className={`fi fi-${pais}`}></i>
      <br />
      <Link to={Rotas.produtos.detalhes.rota(nome.replaceAll(" ", "+"))}>
        <button className="add-to-cart">Ver Mais</button>
      </Link>
    </div>
  );
};
