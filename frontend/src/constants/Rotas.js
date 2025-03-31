const prefixAdmin = "/admin"
const criarRotaAdmin = (prefixo) => ({
    prefixo: prefixo,
    lista: `${prefixAdmin}/${prefixo}`,
    adicionar: `${prefixAdmin}/${prefixo}/adicionar`,
    editar: (id) => `${prefixAdmin}/${prefixo}/editar/${id}`,
}) 
export default {
    home: "/",
    sobre: "/sobre",
    local: "/local",
    paises: {
        index: "/paises",
        detalhes: {
            definicao: `:nome`,
            rota: (nome) => `/paises/${nome}`
        },
    },
    usuarios: {
        prefixo: "/usuarios",
        login: {
            definicao: "login",
            rota: "/usuarios/login"
        },
        perfil:{
            definicao: "perfil",
            rota: "/usuarios/perfil"
        }
    },
    produtos: {
        prefixo: "/produtos",
        busca: {
            definicao: "busca",
            rota: (consulta) => `/produtos/busca?q=${consulta}`
        },
        detalhes: {
            definicao: ":nome",
            rota: (nome) => `/produtos/${nome}`
        }
    },
    admin: {
        prefixo: prefixAdmin,
        paises: criarRotaAdmin("paises"),
        produtos: criarRotaAdmin("produtos"),
        usuarios: criarRotaAdmin("usuarios"),
        avaliacoes: criarRotaAdmin("avaliacoes")
    }
}