import { useNavigate, useParams } from "react-router-dom";
import CampoEntrada from "../../../components/entradas/CampoEntrada";
import BackendEndPoints from "../../../constants/BackendEndPoints";
import useForm from "../../../hooks/useForm";
import Requisicao from "../../../utils/requisicao/Requisicao";
import { useEffect } from "react";
import SelecaoEntrada from "../../../components/entradas/SelecaoEntrada";
import Status from "../../../constants/Status";
import FormularioAdmin from "../../../components/FormularioAdmin";
import Rotas from "../../../constants/Rotas";
import EntradaImagem from "../../../components/entradas/EntradaImagem";
import "./PaisFormulario.css";

export default () => {
  const { controllers, erros, change, valores, ceder, mudar } = useForm({
    codigo: "",
    nome: "",
    status: -1,
    capa: [],
    capaFormato: "",
  });

  return (
    <FormularioAdmin
      titulo="Paises"
      campos={
        <>
          <div className="capa-nome">
            <EntradaImagem
              id="capa"
              mudar={(imagem) => {
                mudar("capaFormato", imagem.formato);
                mudar("capa", imagem.bytes);
              }}
              link={
                valores.id
                  ? BackendEndPoints.paises.capa(valores.id)
                  : undefined
              }
            />

            <CampoEntrada label="nome" controller={controllers.nome} />
          </div>
          <div className="bandeira-codigo">
            <CampoEntrada
              label="código"
              maxLength={2}
              controller={controllers.codigo}
            />
            <i className={`fi fi-${valores.codigo}`}></i>
          </div>
        </>
      }
      ceder={ceder}
      endpoint={BackendEndPoints.paises}
      rota={Rotas.admin.paises}
      controllerStatus={controllers.status}
      valores={valores}
    />
  );
};
