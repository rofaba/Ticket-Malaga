import React from 'react';
import { useNavigate } from "react-router-dom";
import './EmptyCart.css';

function EmptyCart(){
    const navigate = useNavigate();
    return (  
        <div className="empty-cart">
            <p>No tienes productos en tu carrito.</p>
            <p>¿En serio te vas a perder esos conciertos?</p>
            <img src="https://img.freepik.com/premium-photo/happy-people-dance-nightclub-party-concert_31965-606.jpg?w=1060" alt="concert" />
            <button onClick={() => navigate("/")}>Volver a la tienda</button>
        </div>
    );
}
 
export default EmptyCart;