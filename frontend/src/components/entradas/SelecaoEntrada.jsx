import "./SelecaoEntrada.css";

export default ({
  id,
  label,
  controller,
  opcoes,
  padrao = "",
  obterSelecioado = (e) => e,
}) => {
  return (
    <div className="selecao-entrada">
      <label htmlFor={id}>{label}: </label>
      <select
        id={id}
        {...controller}
        value={obterSelecioado(controller.value)}
        name=""
      >
        {controller.value == padrao && (
          <option value={padrao}>selecione</option>
        )}
        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.extra} {opcao.texto}
          </option>
        ))}
      </select>
    </div>
  );
};
