import { useEffect, useState } from "react";
import "./EntradaImagem.css";
import BackendUrl from "../../constants/BackendUrl";

export default ({ id, mudar, link }) => {
  const [arquivo, setArquivo] = useState({
    formato: "",
    bytes: [],
    preview: "",
  });

  async function lerImagemOnline() {
    const resposta = await fetch(BackendUrl + link);
    const blob = await resposta.blob();

    lerArquivo(blob);
  }

  useEffect(() => {
    console.log("link");
    if (link) {
      lerImagemOnline();
    }
  }, [link]);

  useEffect(() => {
    mudar(arquivo);
  }, [arquivo]);

  function lerArquivo(e) {
    const file = e instanceof Blob ? e : e.target.files[0];

    const leitor = new FileReader();

    leitor.onload = () => {
      if (typeof leitor.result == "string") {
        setArquivo((atual) => ({
          ...atual,
          preview: leitor.result,
        }));
      } else {
        setArquivo({
          formato: file.type,
          bytes: Array.from(new Uint8Array(leitor.result)),
          preview: "",
        });
        leitor.readAsDataURL(file);
      }
    };

    leitor.readAsArrayBuffer(file);
  }

  return (
    <div className="entrada-imagem">
      <label htmlFor={id}>
        Imagem
        <img src={arquivo.preview} alt="" />
      </label>
      <input id={id} type="file" onChange={lerArquivo} accept="image/*" />
    </div>
  );
};
