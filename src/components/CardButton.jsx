
// eslint-disable-next-line react/prop-types

import React from "react"; 

function CardButton({ onClick }) {
    return (
      <button className="card-button" onClick={onClick}>
        Agregar al Carrito
      </button>
    );
  }
  
  export default CardButton;
  