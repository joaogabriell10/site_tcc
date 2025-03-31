import { Navigate, useNavigate } from "react-router-dom";
import CampoEntrada from "../components/entradas/CampoEntrada";
import Menu from "../components/layout/Menu";
import Rodape from "../components/layout/Rodape";
import BackendEndPoints from "../constants/BackendEndPoints";
import DadosLocais from "../constants/DadosLocais";
import useDadosLocais from "../hooks/useDadosLocais";
import useForm from "../hooks/useForm";
import Requisicao from "../utils/requisicao/Requisicao";
import Rotas from "../constants/Rotas";
import "./Login.css";
import { useState } from "react";

export default () => {
  const { ceder, controllers, valores } = useForm({ email: "", senha: "" });
  const [, setEmail] = useDadosLocais(DadosLocais.email);
  const [, setNivelAcesso] = useDadosLocais(DadosLocais.nivelAcesso);
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  return (
    <div>
      <Menu />
      <div className="login">
        <form
          className="login-form"
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const resposta = await Requisicao.enviar(
                BackendEndPoints.usuarios.login,
                valores
              );
              setMensagem("");
              const usuario = resposta.dados;
              setNivelAcesso(usuario.nivelAcesso);
              setEmail(usuario.email);
              navigate(Rotas.admin.paises.lista);
            } catch (e) {
              setMensagem("Login invalido");
            }
          }}
        >
          <h1>Login</h1>
          <CampoEntrada
            controller={controllers.email}
            id="email"
            label="Email"
          />
          <CampoEntrada
            tipo="password"
            controller={controllers.senha}
            id="senha"
            label="Senha"
          />
          <h4 className="form-erro">{mensagem}</h4>
          <div className="login-opcoes">
            <button type="submit">logar</button>
          </div>
        </form>
      </div>
      <Rodape />
    </div>
  );
};
