export default {
    ATIVO: 1,
    INATIVO: 0,
    INDEFINIDO: -1,

    obterStatus(status) {
        return (status == 1 || status == "ATIVO" ) ? this.ATIVO : (status == 0 || status == "INATIVO" ) ? this.INATIVO : this.INDEFINIDO
    },
    obterNome(status) {
        return status == this.ATIVO ? "ATIVO" : status == this.INATIVO ? "INATIVO" : "INDEFINIDO"
    }
}