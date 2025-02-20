import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "../components/EmptyCart";
import ActiveCart from "../components/ActiveCart";


function Checkout() {
  const { cart } = useContext(CartContext);
  const [cartStatus, setCartStatus] = useState(false);

  useEffect(() => {
    setCartStatus(cart.length > 0);
  }, [cart]);

  return (
    <>
    {cartStatus ?
    <ActiveCart /> :
    <EmptyCart/>
}
    </>
    
  );
}

export default Checkout;
