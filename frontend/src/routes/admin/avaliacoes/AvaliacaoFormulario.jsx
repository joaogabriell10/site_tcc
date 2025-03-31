import { useEffect, useState } from "react";
import FormularioAdmin from "../../../components/FormularioAdmin";
import CampoEntrada from "../../../components/entradas/CampoEntrada";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import Rotas from "../../../constants/Rotas";
import useForm from "../../../hooks/useForm";
import Requisicao from "../../../utils/requisicao/Requisicao";
import SelecaoEntrada from "../../../components/entradas/SelecaoEntrada";

export default () => {
  const [usuarios, setUsuarios] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const { ceder, controllers, erros, mudar, valores } = useForm(
    {
      nota: 0,
      usuarioId: 0,
      comentario: "",
      produtoId: 0,
      status: -1,
      usuario: undefined,
      produto: undefined,
    },
    {
      transformacao: {
        nota: (valor) =>
          isNaN(valor.trim() == "" ? "f" : valor) ? valor : parseFloat(valor),
      },
    }
  );

  useEffect(() => {
    if (valores.produto) {
      mudar("produtoId", valores.produto.id);
    } else if (valores.usuario) {
      mudar("usuarioId", valores.usuario.id);
    }
  }, [valores.produto, valores.usuario]);

  useEffect(() => {
    if (valores.produtoId) {
      mudar(
        "produto",
        produtos.find((produto) => produto.id == valores.produtoId)
      );
    }
    if (valores.usuarioId) {
      mudar(
        "usuario",
        usuarios.find((usuario) => usuario.id == valores.usuarioId)
      );
    }
  }, [valores.produtoId, valores.usuarioId]);

  async function obterOpcoes() {
    const respostaUsuarios = await Requisicao.obter(
      BackendEndPoints.usuarios.listar
    );
    const respostaProdutos = await Requisicao.obter(
      BackendEndPoints.produtos.listar
    );
    setUsuarios(respostaUsuarios.dados);
    setProdutos(respostaProdutos.dados);
  }

  useEffect(() => {
    obterOpcoes();
  }, []);

  return (
    <FormularioAdmin
      titulo="Avaliações"
      campos={
        <>
          <CampoEntrada
            controller={controllers.nota}
            tipo="number"
            id="nota"
            max={5}
            min={0}
            label="Nota"
          />
          <CampoEntrada
            id="comentario"
            controller={controllers.comentario}
            multilinha
            maxLength={undefined}
            label="Coméntario"
          />
          <SelecaoEntrada
            id="usuario-id"
            controller={controllers.usuarioId}
            opcoes={usuarios.map((usuario) => ({
              valor: usuario.id,
              texto: usuario.email,
            }))}
            label="Usuário"
            padrao={0}
          />
          <SelecaoEntrada
            id="produto-id"
            controller={controllers.produtoId}
            opcoes={produtos.map((produto) => ({
              valor: produto.id,
              texto: produto.nome,
            }))}
            label="Produto"
            padrao={0}
          />
        </>
      }
      ceder={ceder}
      controllerStatus={controllers.status}
      endpoint={BackendEndPoints.avaliacoes}
      rota={Rotas.admin.avaliacoes}
      valores={valores}
    />
  );
};
