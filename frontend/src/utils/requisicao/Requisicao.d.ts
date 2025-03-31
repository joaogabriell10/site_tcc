import requisicao from "./adapter/XmlAdapter"

export interface Resposta {
    dados: any,
    status: number
}



    interface requisicao {
        obter: (url: string) => Promise<Resposta>,
        enviar: (url: string, corpo: any) => Promise<Resposta>
    }
    export default ({
        obter: (url: string) => Promise<Resposta>,
        enviar: (url: string, corpo: any) => Promise<Resposta>
    }) as requisicao
