import { useState } from "react"

export default (iniciais , { transformacao } = {transformacao: {}, validacao: {}}) => {
    const [valores, setValores] = useState(iniciais)
    const mudar = (campo, valor) => {
        if (valor instanceof Array) {
            console.log({
                ...valores,
                [campo]: transformacao[campo] ? transformacao[campo](valor) : valor
            })
        }   
        setValores((valores) => ({
            ...valores,
            [campo]: transformacao[campo] ? transformacao[campo](valor) : valor
        }))
    }
    return {
        valores,
        controllers: Object.keys(valores).reduce((ac, valor) => {
            ac[valor] = {
                onChange: (e) => {
                   mudar(valor, e.target.value)
                },
                value: valores[valor]
            }
            return ac
        }, {}),
        mudar,
        ceder: (valores) => setValores({...valores})
    }
}