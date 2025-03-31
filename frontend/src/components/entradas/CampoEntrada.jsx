import "./CampoEntrada.css";

export default ({
  label,
  id,
  controller,
  maxLength = 250,
  multilinha = false,
  tipo = "text",
  max,
  min
}) => {
  return (
    <div className="campo-entrada">
      <label htmlFor={id}>{label}</label>
      {multilinha ? (
        <textarea {...controller} id={id}></textarea>
      ) : (
        <input max={max} min={min} maxLength={maxLength} type={tipo} id={id} {...controller} />
      )}
    </div>
  );
};
