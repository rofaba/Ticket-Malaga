import React, { useState, useContext } from "react";
import { FilterContext } from "../context/filterContext";
import "./FilterBar.css";

function FilterBar() {
  const { updateFilters } = useContext(FilterContext);

  const [event_name, setEvent_name] = useState("");
  const [place, setPlace] = useState("");
  const [date_from, setDate_from] = useState("");
  const [date_to, setDate_to] = useState("");
  const [price_min, setPrice_min] = useState("");
  const [price_max, setPrice_max] = useState("");

  const handleFilter = () => {
    updateFilters({
      event_name,
      place,
      date_from,
      date_to,
      price_min: price_min !== "" ? Number(price_min) : "",
      price_max: price_max !== "" ? Number(price_max) : "",
    });
    console.log("Filtros aplicados:", {
      event_name,
      place,
      date_from,
      date_to,
      price_min: price_min !== "" ? Number(price_min) : "",
      price_max: price_max !== "" ? Number(price_max) : "",
    });
  };

 
  const handleResetFilters = () => {
    setEvent_name("");
    setPlace("");
    setDate_from("");
    setDate_to("");
    setPrice_min("");
    setPrice_max("");
    
    updateFilters({
      event_name: "",
      place: "",
      dateTime: "",
      price_min: "",
      price_max: "",
    });

    console.log("Filtros reseteados");
  };

  return (
    <div className="filterbar">
      <input 
        type="text" 
        placeholder="Artista" 
        value={event_name} 
        onChange={(e) => setEvent_name(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Ciudad" 
        value={place} 
        onChange={(e) => setPlace(e.target.value)} 
      />
      <input
        type="date" 
        placeholder="Fecha desde" 
        value={date_from} 
        onChange={(e) => setDate_from(e.target.value)}
        className="custom-date-input"
      />
       <input 
        type="date" 
        placeholder="Fecha hasta" 
        value={date_to} 
        onChange={(e) => setDate_to(e.target.value)}
        className="custom-date-input"
      />
      <input 
        type="number" 
        placeholder="Precio mínimo" 
        value={price_min} 
        onChange={(e) => setPrice_min(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Precio máximo" 
        value={price_max} 
        onChange={(e) => setPrice_max(e.target.value)} 
      />
      <button className="filter-button" onClick={handleFilter}>Aplicar filtros</button>
      <button className="reset-button" onClick={handleResetFilters}>Borrar filtros</button>
    </div>
  );
}

export default FilterBar;
