/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import "./ConcertDetail.css";
import { CartContext } from "../context/CartContext";
import CardButton from "./CardButton";
import "../App.css";
import "./ConcertCard.css";
import concerts from "../data/concerts";
import { useParams } from "react-router-dom";
import { FilterContext } from "../context/filterContext";

function ConcertDetail() {
  const { addToCart, cart } = useContext(CartContext);
  const { useLocalData } = useContext(FilterContext);
  const [message, setMessage] = useState("");
  const [concert, setConcert] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchConcert = async () => {
      try {
        if (useLocalData) {
          console.log("Buscando en datos locales...");
          const foundConcert =
            concerts.find((c) => c.id === parseInt(id, 10)) || null;
          setConcert(foundConcert);
        } else {
          console.log(
            `Llamando a la API para obtener el concierto con id: ${id}`
          );
          const response = await fetch(
            `https://tickets-back-p1qc.onrender.com/concerts/${id}`
          );

          if (!response.ok) {
            throw new Error("Error al obtener los datos del concierto");
          }

          const data = await response.json();
          setConcert(data);
        }
      } catch (error) {
        console.error("Error al obtener datos del concierto:", error);
        setConcert(null);
      }
    };

    fetchConcert();
  }, [id, useLocalData]);

  const handleAddToCart = () => {
    if (!concert) return;

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
    setTimeout(() => setMessage(""), 2000);
  };

  if (!concert) {
    return <p>Cargando detalles del concierto...</p>;
  }

  return (
    <div className="product-detail">
      <div className="card-detail">
        <img
          src={concert.img || "placeholder.jpg"}
          alt={`Imagen de ${concert.eventName || "Concierto"}`}
        />
        <h3>{concert.event_name || "Nombre no disponible"}</h3>
        <p>{concert.description || "Descripción no disponible"}</p>

        <div className="card-bottom">
          <div className="card-data">
            <div className="location">
              <p>
                <strong>{concert.place || "Ubicación no disponible"}</strong>
              </p>
              <p className="concert-date">
                {concert.dateTime
                  ? new Date(concert.dateTime).toLocaleDateString()
                  : "Fecha no disponible"}
              </p>
            </div>
            <p>${concert.price || "Precio no disponible"}</p>
            <p className={concert.stock > 0 ? "stock-available" : "stock-out"}>
              {concert.stock > 0
                ? `Stock: ${concert.stock} entradas`
                : "Agotado"}
            </p>
          </div>
          <CardButton onClick={handleAddToCart} />
          <button className="details-btn" onClick={() => window.history.back()}>
            Volver a listado de conciertos
          </button>
        </div>

        {message && (
          <p
            className={
              message.includes("OK") ? "success-message" : "error-message"
            }
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ConcertDetail;
