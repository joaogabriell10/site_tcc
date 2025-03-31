import FormularioAdmin from "../../../components/FormularioAdmin";
import CampoEntrada from "../../../components/entradas/CampoEntrada";
import SelecaoEntrada from "../../../components/entradas/SelecaoEntrada";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import Rotas from "../../../constants/Rotas";
import useForm from "../../../hooks/useForm";

export default () => {
  const { ceder, valores, controllers, erros } = useForm({
    nome: "",
    email: "",
    status: -1,
    cpf: "",
    telefone: "",
    nivelAcesso: "",
    senha: "",
  });
  return (
    <FormularioAdmin
      titulo="Usuários"
      campos={
        <>
          <CampoEntrada controller={controllers.nome} id="nome" label="Nome" />
          <CampoEntrada
            controller={controllers.email}
            id="email"
            label="Email"
          />
          <CampoEntrada
            controller={controllers.cpf}
            id="cpf"
            label="CPF"
            maxLength={11}
          />
          <CampoEntrada
            controller={controllers.telefone}
            id="telefone"
            label="Telefone"
            maxLength={13}
          />
          <CampoEntrada
            controller={controllers.senha}
            id="senha"
            label="Senha"
            tipo="password"
          />
          <SelecaoEntrada
            controller={controllers.nivelAcesso}
            id="nivel-acesso"
            label="Nível Acesso"
            opcoes={[
              { texto: "Administrador", valor: "ADMIN" },
              { texto: "Cliente", valor: "CLIENTE" },
            ]}
          />
        </>
      }
      ceder={ceder}
      controllerStatus={controllers.status}
      endpoint={BackendEndPoints.usuarios}
      rota={Rotas.admin.usuarios}
      valores={valores}
    />
  );
};
