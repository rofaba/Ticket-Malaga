import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    event_name: "",
    place: "",
    dateTime: "",
    price_min: "",
    price_max: "",
  });


  const [useLocalData, setUseLocalData] = useState(true);

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters, useLocalData, setUseLocalData }}>
      {children}
    </FilterContext.Provider>
  );
};
