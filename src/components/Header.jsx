
import React from 'react';
import { useContext } from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import { CartContext } from '../context/CartContext';


function Header() {
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);

    return (
        <div className='header'>
         
            <button 
                className='logo' 
                onClick={() => {
                    navigate("/");
                    window.location.reload();     
                }}
            >
                <img src={'https://st2.depositphotos.com/5943796/11433/v/950/depositphotos_114337146-stock-illustration-initial-letter-tg-green-swoosh.jpg'} alt="Home" title='Home'/>
            </button>
           
            <FilterBar />
            
            <button className='hideButton' onClick={() => navigate("/checkout")}>
                <img src={'./public/carro.svg'} alt="Carrito" title="Carrito"/>
                {cart.length > 0 && <span className='span'>{cart.length}</span>}
            </button>
        </div>
    );
}

export default Header;
