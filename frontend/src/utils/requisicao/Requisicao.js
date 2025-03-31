import BackendUrl from "../../constants/BackendUrl";
import AxiosAdapter from "./adapter/AxiosAdapter";
import XmlAdapter from "./adapter/XmlAdapter";

const adapter = AxiosAdapter(BackendUrl);

export default {
    async obter(url) {
        return adapter.obter(url)
    },
    async enviar(url, dados) {
        return adapter.enviar(url, dados)
    }
}