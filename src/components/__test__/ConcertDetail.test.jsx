import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import { CartProvider } from "../../context/CartContext";
import { FilterProvider } from "../../context/filterContext";
import ConcertDetail from "../../components/ConcertDetail";

const mockConcert = {
  id: 1,
  eventName: "Rock Fest",
  description: "Un concierto increíble",
  place: "Madrid",
  dateTime: "2025-06-15T20:00:00",
  price: 50,
  stock: 10,
  img: "image.jpg",
};

vi.mock("../../data/concerts", () => ({
  default: [mockConcert],
}));

describe("ConcertDetail Navigation", () => {
  test("muestra correctamente la información del concierto", () => {
    render(
      <CartProvider>
        <FilterProvider value={{ useLocalData: true }}>
          <MemoryRouter initialEntries={["/detail/1"]}>
            <Routes>
              <Route path="/detail/:id" element={<ConcertDetail />} />
            </Routes>
          </MemoryRouter>
        </FilterProvider>
      </CartProvider>
    );

    expect(screen.getByText("Rock Fest")).toBeInTheDocument();
    expect(screen.getByText("Un concierto increíble")).toBeInTheDocument();

    const formattedDate = new Date(mockConcert.dateTime).toLocaleDateString("es-ES");
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
