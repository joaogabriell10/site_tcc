import { createBrowserRouter } from "react-router-dom"
import Inicio from "../routes/Inicio"
import Sobre from "../routes/Sobre"
import Local from "../routes/Local"
import PaisesLista from "../routes/paises/PaisesLista"
import PaisDetalhes from "../routes/paises/PaisDetalhes"
import PaisesAdminLista from "../routes/admin/paises/PaisesAdminLista"
import PaisFormulario from "../routes/admin/paises/PaisFormulario"
import UsuarioLista from "../routes/admin/usuarios/UsuarioLista"
import Rotas from "../constants/Rotas"
import ProdutosLista from "../routes/admin/produtos/ProdutosAdminLista"
import ProdutosAdminLista from "../routes/admin/produtos/ProdutosAdminLista"
import UsuarioForm from "../routes/admin/usuarios/UsuarioForm"
import Login from "../routes/Login"
import ProdutoFormulario from "../routes/admin/produtos/ProdutoFormulario"
import AvaliacaoFormulario from "../routes/admin/avaliacoes/AvaliacaoFormulario"
import ListaAvaliacoes from "../routes/admin/avaliacoes/ListaAvaliacoes"
import BuscarProdutos from "../routes/produtos/BuscarProdutos"
import ProdutoDetalhes from "../routes/produtos/ProdutoDetalhes"


const criarRotaAdmin = (prefixo, lista, formulario) => ({
        path: prefixo,
        children: [
            {
                index: true,
                Component: lista
            },
            {
                path: "adicionar",
                Component: formulario
            },
            {
                path: "editar",
                children: [
                    {
                        path: ":id",
                        Component: formulario
                    }
                ]
            },

        ]
    })

export default createBrowserRouter([
    {
        path: Rotas.home,
        Component: Inicio
    },
    {
        path: Rotas.sobre,
        Component: Sobre
    },
    {
        path: Rotas.local,
        Component: Local
    },
    {
        path: Rotas.usuarios.prefixo,
        children: [
            {
                path: Rotas.usuarios.login.definicao,
                Component: Login
            }
        ]
    },
    {
        path: Rotas.produtos.prefixo,
        children: [
            {
                path: Rotas.produtos.busca.definicao,
                Component: BuscarProdutos
            },
            {
                path: Rotas.produtos.detalhes.definicao,
                Component: ProdutoDetalhes
            }
        ]
    },
    {
        path: Rotas.paises.index,
        
        children: [
            {
                index: true,
                Component: PaisesLista,
            },
            {
                path: Rotas.paises.detalhes.definicao,
                Component: PaisDetalhes
            }
        ]
    },
    {
        path: Rotas.admin.prefixo,
        children:[
            criarRotaAdmin("paises", PaisesAdminLista, PaisFormulario),
            criarRotaAdmin("usuarios", UsuarioLista, UsuarioForm),
            criarRotaAdmin("produtos", ProdutosAdminLista, ProdutoFormulario),
            criarRotaAdmin("avaliacoes", ListaAvaliacoes, AvaliacaoFormulario)
        ]
    }
])