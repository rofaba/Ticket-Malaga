import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/filterContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ConfirmPage from "./pages/ConfirmPage";
import NotFound from "./pages/NotFound";
import ConcertPage from "./pages/ConcertPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirm" element={<ConfirmPage />} />
              <Route path="/detail/:id" element={<ConcertPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </FilterProvider>
    </CartProvider>
  );
}

export default App;

