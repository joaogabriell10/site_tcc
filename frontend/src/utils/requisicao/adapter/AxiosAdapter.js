import axios from "axios"
export default (urlBase) => ({
    async obter(url) {
      const resposta = await axios.get(urlBase + url)
      return { status: resposta.status, dados: resposta.data }
    },
    async enviar(url, dados) {
      const resposta = await axios.post(urlBase + url, dados)
      return { status: resposta.status, dados: resposta.data }
    }
})