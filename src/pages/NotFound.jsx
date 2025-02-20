import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>Página No Encontrada</h1>
      <img src="https://s3-cdn.cmlabs.co/page/2023/01/24/a-guideline-on-how-to-fix-error-404-not-found-effectively-519451.png" 
      alt="pagina_no_encontrada"/>
      <p>Lo sentimos, la página que buscas no existe.</p>
      
      <button onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
  );
}

export default NotFound;
