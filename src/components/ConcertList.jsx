import React, { useState } from "react";
import ConcertCard from "./ConcertCard";
import useFilteredConcerts from "./useFilteredConcerts";
import "./ConcertList.css";

function ConcertList() {
  const filteredConcerts = useFilteredConcerts();
  const [currentPage, setCurrentPage] = useState(1);
  const concertsPerPage = 6; 

 
  const startIndex = (currentPage - 1) * concertsPerPage;
  const endIndex = startIndex + concertsPerPage;
  const currentConcerts = filteredConcerts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredConcerts.length / concertsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className="concert-list">
      {currentConcerts.length > 0 ? (
        currentConcerts.map((concert) => (
          <ConcertCard key={concert.id} concert={concert} />
        ))
      ) : (
        <p>No se encontraron conciertos</p>
      )}

   
 
    </div>     
    {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
             Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente 
          </button>
        </div>
      )}
  </>);
}

export default ConcertList;

