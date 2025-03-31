import { Link } from "react-router-dom";

export default ({ nome, codigo }) => {
  return (
    <div className="produto">
      <div className="vermelho">
        <i style={{ fontSize: "9rem" }} className={`fi fi-${codigo}`} />
      </div>
      <h7>{nome}</h7> <br />
      <Link to={`/paises/${nome.replaceAll(" ", "+")}`}>
        <button className="add-to-cart">Ver Mais Sobre o País</button>
      </Link>
    </div>
  );
};
