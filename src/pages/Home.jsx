import ConcertList from "../components/ConcertList";
import MainEvent from "../components/MainEvent";
import DataSourceSelector from "../components/DataSourceSelector";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <MainEvent />

      <div className="selector-Line">
        <h2>Conciertos Disponibles</h2>
        <DataSourceSelector />
      </div>

      <ConcertList />
    </div>
  );
}

export default Home;
