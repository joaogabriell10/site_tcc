import { Link } from "react-router-dom";

export default () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-column">
          <h3>Informações da </h3>
          <h3>Empresa</h3>
          <Link to="/sobre">
            <p>Sobre nós</p>
          </Link>
          <Link to="/local">
            <p>Local</p>
          </Link>
        </div>
        <div className="footer-column">
          <h3>Atendimento ao</h3>
          <h3>Cliente</h3>
          <ul>
            <li>
              <a href="#">Contato por e-mail</a>
            </li>
            <li>
              <a href="#">Contato por telefone</a>
            </li>
            <li>
              <a href="#">Contato via sms</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2024 Dish Of The World</p>
      </div>
    </footer>
  );
};
