import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <ul>
        <li>
          <a href="facebook.com" target="_blank">
            <img src="../imagens/fb.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="twitter.com" target="_blank">
            <img src="../imagens/tw.png" alt="twiter" />
          </a>
        </li>
        <li>
          <a href="instagram.com" target="_blank">
            <img src="../imagens/ig.png" alt="instagram" />
          </a>
        </li>
      </ul>
      <img src="../imagens/logo.png" alt="logo" />
      <p>Desenvolvido por Ângelo Collovini.</p>
    </div>
  );
};

export default Rodape;
