import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="follow">
        <h1>Ticket-G</h1>
        <button
          className="logo_footer"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          <img
            src={
              "https://st2.depositphotos.com/5943796/11433/v/950/depositphotos_114337146-stock-illustration-initial-letter-tg-green-swoosh.jpg"
            }
            alt="Home"
            title="Home"
          />
        </button>
        <h3>Siguenos en nuestras redes sociales</h3>
        <div className="social">
          <a href="https://x.com/?lang=en&mx=2">X Ex-Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </div>

      <div className="info">
        <h3>Dudas frecuentes</h3>
        <p>Devolución</p>
        <p>He perdido mi entrada</p>
        <p>¿Es segura la página?</p>
      </div>
    </div>
  );
}

export default Footer;
