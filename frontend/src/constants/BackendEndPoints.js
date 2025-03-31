const endpointsBasicos = (prefixo) => ({
    salvar: `${prefixo}/salvar`,
    listar: `${prefixo}/listar`,
    listarParaCliente: `${prefixo}/listar/cliente`,
    deletar: (id) => `${prefixo}/deletar/${id}`,
    obter: (id) => `${prefixo}/obter/${id}`
})

export default {
    produtos: {
        ...endpointsBasicos("produtos"),
        obterPorNome: (nome) => `produtos/obter/nome/${nome}`,
        imagem: (id) => `produtos/imagem/${id}`,
        experimente: `produtos/home/experimente`,
        favoritos: `produtos/home/favoritas`,
        buscar:(consulta) => `produtos/buscar?consulta=${consulta}`
    },
    paises: {
       ...endpointsBasicos("paises"),
       obterPorNome: (nome) => `paises/obter/nome/${nome}`,
       capa: (id) => `paises/capa/${id}`,
       procurados: "paises/home/procurados"
    },
    usuarios: {
        ...endpointsBasicos("usuarios"),
        login: "usuarios/login"
    },
    avaliacoes:{
        ...endpointsBasicos("avaliacoes")
    }
}