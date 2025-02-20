import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";
import "./DataSourceSelector.css";

const DataSourceSelector = () => {
  const { useLocalData, setUseLocalData } = useContext(FilterContext);

  const handleToggle = () => {
   
    setUseLocalData(!useLocalData);
  };

  return (
    <div className="data-source-selector">
      <span className="toggle-label">
        {useLocalData ? "Data" : "API"}
      </span>
      <label className="switch">
        <input type="checkbox" checked={!useLocalData} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DataSourceSelector;
