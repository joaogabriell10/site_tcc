import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./Menu.css";
import useDadosLocais from "../../hooks/useDadosLocais";
import DadosLocais from "../../constants/DadosLocais";
import Rotas from "../../constants/Rotas";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

export default () => {
  const [params, setParams] = useSearchParams();
  const consulta = params.get("q");
  const { valores, controllers, mudar } = useForm({ consulta: "" });
  useEffect(() => {
    if (consulta) {
      mudar("consulta", consulta);
    }
  }, [consulta]);
  const [nivelAcesso, setNivelAcesso, removerNivelAcesso] = useDadosLocais(
    DadosLocais.nivelAcesso
  );
  const [email, setEmail, removerEmail] = useDadosLocais(DadosLocais.email);
  // <i class="fa-solid fa-basket-shopping"></i>
  const rotasAdmin = [
    {
      icon: "flag",
      uri: Rotas.admin.paises,
    },
    {
      icon: "utensils",
      uri: Rotas.admin.produtos,
    },
    {
      icon: "users",
      uri: Rotas.admin.usuarios,
    },
    {
      icon: "star",
      uri: Rotas.admin.avaliacoes,
    },
    // {
    //   icon: "basket-shopping",
    //   uri: Rotas.admin.avaliacoes,
    // },
  ];
  const navigate = useNavigate();
  return (
    <header>
      <div className="head">
        <a>
          <img className="logo" src="/imgHeader/logo.png" />
        </a>
        <div className="dist">
          <Link to="/" className="menu-link">
            <i className="fa fa-house"></i>
          </Link>
          <Link to="/paises" className="menu-link">
            <i className="fa fa-earth"></i>
          </Link>
          {nivelAcesso == "ADMIN" && (
            <>
              {rotasAdmin.map((rota) => (
                <Link to={rota.uri.lista} className="menu-link">
                  <i className={`fa fa-${rota.icon}`}></i>
                </Link>
              ))}
            </>
          )}
          {nivelAcesso == "CLIENTE" && (
            <a href="inicio.html" className="menu-link">
              <i className="fa fa-heart"></i>
            </a>
          )}
        </div>
        <div className="dista">
          <div className="search-box">
            <input
              {...controllers.consulta}
              type="text"
              placeholder="Search..."
            />
            <button
              onClick={() => {
                if (consulta) {
                  params.set("q", valores.consulta);
                  setParams(params);
                } else {
                  navigate(Rotas.produtos.busca.rota(valores.consulta));
                }
              }}
            >
              <img className="lupa" src="/lupa.png" />
            </button>
          </div>
        </div>
        <div className="usuario-opcoes">
          {email ? (
            <button
              className="menu-link"
              onClick={() => {
                removerEmail();
                removerNivelAcesso();
                navigate("/");
              }}
            >
              <i className="fa fa-door-open"></i>
            </button>
          ) : (
            <Link to="/usuarios/login" className="menu-link">
              <i className="fa fa-right-to-bracket"></i>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
