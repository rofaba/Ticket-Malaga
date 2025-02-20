import './MainEvent.css';
import concerts from '../data/concerts';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from "../context/filterContext";
import { useContext } from 'react';

function MainEvent() {
    const { useLocalData } = useContext(FilterContext);
    const [concert, setConcert] = useState(null);
    const [concertsList, setConcertsList] = useState(concerts);

    useEffect(() => {
        async function fetchConcerts() {
            if (!useLocalData) {
                try {
                    const response = await fetch("https://tickets-back-p1qc.onrender.com/concerts");
                    const data = await response.json();
                    setConcertsList(data);
                } catch (error) {
                    console.error("Error al obtener datos de la API", error);
                    setConcertsList(concerts);
                    }
            }
        }

        fetchConcerts();
    }, [useLocalData]);

    useEffect(() => {
        function getRandomConcert() {
            if (concertsList.length > 0) {
                let index = Math.floor(Math.random() * concertsList.length);
                setConcert(concertsList[index]);
            }
        }

        getRandomConcert();
        const intervalIndex = setInterval(getRandomConcert, 5000);
        return () => clearInterval(intervalIndex);
    }, [concertsList]);

    if (!concert) {
        return <p>Cargando evento destacado...</p>;
    }

    return (
        <div className="event_container">
            <img src={concert.img} alt={`Imagen de ${concert.event_name}`} />
            <div className="concert-data">
                <h2>{concert.event_name}</h2>
                <p>{concert.place}</p> 
                <p>{new Date(concert.dateTime).toLocaleDateString()}</p>
                
                <Link to={`/detail/${concert.id}`}>
                    <button className="go-to-detail-btn">IR DETALLE</button>
                </Link>
            </div>
        </div>
    );
}

export default MainEvent;
