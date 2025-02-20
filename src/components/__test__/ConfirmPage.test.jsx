import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import { CartProvider, CartContext } from "../../context/CartContext";
import ConfirmPage from "../../pages/ConfirmPage";

describe("ConfirmPage Component", () => {
  test("muestra el resumen de la compra correctamente", () => {
    const mockCart = [
      { 
        id: 1, 
        eventName: "Rock Fest", 
        place: "Madrid", 
        dateTime: "2025-06-15T20:00:00", 
        quantity: 2, 
        price: 50 
      },
    ];

    localStorage.setItem("total", "100");
    
    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: mockCart, setCart: vi.fn() }}>
            <ConfirmPage />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );

    expect(screen.getByText("¡Compra realizada con éxito! 🎉")).toBeInTheDocument();
    expect(screen.getByText("Rock Fest")).toBeInTheDocument();
    expect(screen.getByText("Madrid")).toBeInTheDocument();
    expect(screen.getByText(/15\/6\/2025/i)).toBeInTheDocument(); // ✅ Fecha corregida con regex
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getAllByText("$100").length).toBeGreaterThan(0);
  });

  test("limpia el carrito después de la compra", () => {
    const mockSetCart = vi.fn();
    const mockCart = [
      { 
        id: 1, 
        eventName: "Rock Fest", 
        place: "Madrid", 
        dateTime: "2025-06-15T20:00:00", 
        quantity: 2, 
        price: 50 
      }
    ];
    localStorage.setItem("total", "100");
    
    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: mockCart, setCart: mockSetCart }}>
            <ConfirmPage />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

  test("permite volver a la tienda con el botón de navegación", () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <ConfirmPage />
        </MemoryRouter>
      </CartProvider>
    );

    const backButton = screen.getByRole("button", { name: /volver a la tienda/i });
    expect(backButton).toBeInTheDocument();
  });
});
