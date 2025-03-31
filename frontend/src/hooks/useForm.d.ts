import { ChangeEvent } from "react"


    export default function useForm<Tipo extends any>(valores: Tipo, extras: { transformacao: {[Campo in keyof Tipo]: () => Tipo[Campo]}, validacao: {[Campo in keyof Tipo]: (valor: Tipo[Campo]) => string|null} }): {

        valores: Tipo,
        erros: {
            [Campo in keyof Tipo]: string[]
        },
        controllers: {
            [Campo in keyof Tipo]: {
                onChange: (e: ChangeEvent) => void,
                value: Tipo[Campo]
            }
        },
        ceder: (valores: Tipo) => void,
        mudar: <Campo extends keyof Tipo>(campo: Campo, valor: Tipo[Campo]) => void
    
}

