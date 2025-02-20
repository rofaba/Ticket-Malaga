import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ConfirmPage() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [cartCopy, setCartCopy] = useState([...cart]);

  const [total, setTotal] = useState(localStorage.getItem("total"));

  useEffect(() => {
    if (cart.length > 0) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  }, [cart, setCart]);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="confirm-container">
      <h1>¡Compra realizada con éxito! 🎉</h1>
      <h2>Resumen de tu compra:</h2>
      <table>
        <thead>
          <tr>
            <th>Concierto</th>
            <th>Ubicación</th>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartCopy.map((item) => (
            <tr key={item.id}>
              <td>{item.eventName}</td>
              <td>{item.place}</td>
              <td>{formatDateTime(item.dateTime)}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Total de la compra:</strong> ${total}</p>
      <p>¡Gracias por tu compra! Te esperamos en el evento.</p>
      <button onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
  );
}

export default ConfirmPage;
