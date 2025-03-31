export default (urlBase) => ({
    obter(url) {
        const requisicao = new XMLHttpRequest()

        return new Promise((res, rej) => {
            requisicao.onload = function () {
               
                res({ dados: JSON.parse(this.responseText), status: this.status})
            }
            requisicao.onerror =function() {
                rej({ dados: this.responseText })
            }
            console.log(urlBase + url)
            requisicao.open("GET", urlBase + url)
            requisicao.send()
        })
    },
    enviar(url, dados) {
        const requisicao = new XMLHttpRequest()

        return new Promise((res, rej) => {
            const data = new FormData()

            Object.entries(dados).forEach(([chave, valor]) => {
                if (valor !== undefined) {
                    console.log(chave)
                    console.log(valor)
                    if (valor instanceof Array) {
                        if (chave == "imagem") console.log(valor)
                        valor.forEach((valor) => {
                            data.append(`${chave}[]`, valor)
                        })
                    }
                    else {
                        data.append(chave, valor)
                    }
                }
            })

            requisicao.onload = function () {
                console.log(this.responseText)
                res({dados:JSON.parse(this.responseText?? "{}"), status: this.status})
            }
            requisicao.onerror = function() {
                rej()
            }
            requisicao.open("POST", urlBase + url)
            requisicao.send(data)
        })
       
    }
})