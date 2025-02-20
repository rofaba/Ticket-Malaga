import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/filterContext";
import concerts from "../data/concerts"; 

const useFilteredConcerts = () => {
  const { filters, useLocalData } = useContext(FilterContext);
  const [allConcerts, setAllConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (useLocalData) {
        console.log("Usando datos locales...");
        setAllConcerts(concerts); 
        setFilteredConcerts(concerts);
        } else {
        try {
          console.log("Consultando la API...");

          const response = await fetch(`https://tickets-back-p1qc.onrender.com/concerts/`);
          if (!response.ok) throw new Error(`Error en la petición: ${response.statusText}`);

          const data = await response.json();
          console.log("Datos recibidos de la API:", data);

          setAllConcerts(data);
          setFilteredConcerts(data);
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
          setAllConcerts([]);
          setFilteredConcerts([]);
        }
      }
    };

    loadData();
  }, [useLocalData]);
  
  useEffect(() => {
    console.log("Aplicando filtros...");

    const filtered = allConcerts.filter((concert) => {
      let match = true;

      if (filters.event_name?.trim()) {
        match = match && concert.event_name.toLowerCase().includes(filters.event_name.toLowerCase());
      }

      if (filters.place?.trim()) {
        match = match && concert.place.toLowerCase().includes(filters.place.toLowerCase());
      }

      if (filters.date_from?.trim()) {
        const concertDate = concert.dateTime.split("T")[0];
        match = match && concertDate >= filters.date_from;
      }

      if (filters.date_to?.trim()) {
        const concertDate = concert.dateTime.split("T")[0];
        match = match && concertDate <= filters.date_to;
      }

      if (!isNaN(filters.price_min) && filters.price_min !== "") {
        match = match && concert.price >= Number(filters.price_min);
      }

      if (!isNaN(filters.price_max) && filters.price_max !== "") {
        match = match && concert.price <= Number(filters.price_max);
      }

      return match;
    });

    console.log("Conciertos filtrados:", filtered);
    setFilteredConcerts(filtered);
  }, [filters, allConcerts]); 
  
  return filteredConcerts;
};

export default useFilteredConcerts;
