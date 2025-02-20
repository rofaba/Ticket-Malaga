import React, { useContext, useState } from "react";
import "./ActiveCart.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function ActiveCart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [loading, setLoading] = useState(false);
  const [emptyingCart, setEmptyingCart] = useState(false);

  localStorage.setItem("total", total);

  const handleConfirmPurchase = () => {
    setLoading(true);
    localStorage.setItem("total", 0);

    setTimeout(() => {
      setLoading(false);
      navigate("/confirm");
    }, 2000);
  };

  const handleEmptyCart = () => {
    setEmptyingCart(true);

    setTimeout(() => {
      localStorage.setItem("total", 0);
      cart.forEach((item) => removeFromCart(item.id));
      setEmptyingCart(false);
    }, 1500);
  };

  return (
    <>
      <h1>Carrito de Compras</h1>
      <div className="checkout_container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="product">
              <h3>{item.event_name}</h3>
              <p>{item.place}</p>
              <p>Precio: ${item.price}</p>
              <p>
                Cantidad:
                <input
                  className="numEntradas"
                  type="number"
                  value={item.quantity}
                  min="1"
                  max="6"
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Math.max(1, Math.min(6, parseInt(e.target.value, 10)))
                    )
                  }
                />
              </p>
              <button
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <div>
          <h3>Total: ${total}</h3>

          <div className="action">
            <button onClick={handleConfirmPurchase} disabled={loading}>
              {loading ? (
                <BeatLoader color="white" size={15} />
              ) : (
                "Confirmar Compra"
              )}
            </button>

            <button onClick={handleEmptyCart} disabled={emptyingCart}>
              {emptyingCart ? (
                <BeatLoader color="white" size={15} />
              ) : (
                "Vaciar Carrito"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveCart;
