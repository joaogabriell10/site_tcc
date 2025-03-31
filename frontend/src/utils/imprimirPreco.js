export default (preco) => {
    return `${preco}${parseInt(preco) == preco ? ".00" : ""} R$`
}