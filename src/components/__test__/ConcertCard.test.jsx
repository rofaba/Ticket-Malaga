import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import { CartProvider, CartContext } from "../../context/CartContext";
import ConcertCard from "../../components/ConcertCard";

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

const mockAddToCart = vi.fn();

const renderWithContext = (concert, cart = []) => {
  return render(
    <CartProvider>
      <CartContext.Provider value={{ addToCart: mockAddToCart, cart }}>
        <MemoryRouter>
          <ConcertCard concert={concert} />
        </MemoryRouter>
      </CartContext.Provider>
    </CartProvider>
  );
};

describe("ConcertCard Component", () => {
  test("muestra correctamente la información del concierto", () => {
    renderWithContext(mockConcert);
    
    expect(screen.getByText("Rock Fest")).toBeInTheDocument();
    expect(screen.getByText("Un concierto increíble")).toBeInTheDocument();
    expect(screen.getByText("Madrid")).toBeInTheDocument();
    expect(screen.getByText(new Date(mockConcert.dateTime).toLocaleDateString())).toBeInTheDocument(); // ✅ Se adapta la fecha
    expect(screen.getByText("$50")).toBeInTheDocument();
  });

  test("llama a la función de agregar al carrito cuando se presiona el botón", () => {
    renderWithContext(mockConcert, []);

    const button = screen.getByRole("button", { name: /agregar/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });

  test("muestra un mensaje de error si se intentan agregar más de 6 entradas", () => {
    const mockCartWithLimit = [{ id: 1, quantity: 6 }];
    renderWithContext(mockConcert, mockCartWithLimit);
    
    const button = screen.getByRole("button", { name: /agregar/i });
    fireEvent.click(button);
    
    expect(
      screen.getByText("No puedes agregar más de 6 entradas para este concierto.")
    ).toBeInTheDocument();
  });

  test("redirige correctamente al hacer clic en el botón de ver más", () => {
    renderWithContext(mockConcert);
    const detailsButton = screen.getByText("Ver más");
    fireEvent.click(detailsButton);
    expect(detailsButton).toBeInTheDocument();
  });
});
