import { useState } from "react"

export default (chave) => {

    const [valor, setValor] = useState(localStorage.getItem(chave))

    return [
        valor, 
        (valor) => {
            localStorage.setItem(chave, valor)
            setValor(valor)
        },
        () => {
            localStorage.removeItem(chave)
            setValor(undefined)
        }
    ]
}