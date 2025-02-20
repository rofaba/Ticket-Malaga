/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CardButton from "./CardButton";
import "../App.css";
import "./ConcertCard.css";

function ConcertCard({ concert }) {
  const { addToCart, cart } = useContext(CartContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

 
  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === concert.id);

    if (existingItem && existingItem.quantity >= 6) {
      setMessage("No puedes agregar más de 6 entradas para este concierto.");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    if (concert.stock === 0) {
      setMessage("Entradas agotadas para este concierto.");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    addToCart(concert);
    setMessage("OK - Producto agregado al carrito.");
    setTimeout(() => setMessage(""), 500);
  };

  return (
    <div className="card">
      <img src={concert.img} alt={`Imagen de ${concert.event_name}`} />
      <h3>{concert.event_name}</h3>
           <p className="description">{concert.description}</p>

      <div className="card-bottom">
        <div className="card-data">
          <div className="location">
            <p><strong>{concert.place}</strong></p>
            <p className="concert-date">{new Date(concert.dateTime).toLocaleDateString()}</p>
            <p>${concert.price}</p>
          <p className={concert.stock > 0 ? "stock-available" : "stock-out"}>
            {concert.stock > 0 ? `Stock: ${concert.stock} entradas` : "Agotado"}
          </p>
          </div>  
          
        </div>
        <div className="end-card">
          <CardButton onClick={handleAddToCart} />    
          <button className="details-btn" onClick={() => navigate(`/detail/${concert.id}`)}>
            Ver más
          </button>
        </div>
      </div>

      {message && (
        <p className={message.includes("OK") ? "success-message" : "error-message"}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ConcertCard;


