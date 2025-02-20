import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import { describe, test, expect, vi } from "vitest";
import { CartProvider, CartContext } from "../../context/CartContext";
import Checkout from "../../pages/Checkout";

vi.mock("../../components/EmptyCart", () => ({
  default: () => <div data-testid="empty-cart">Carrito vacío</div>,
}));

vi.mock("../../components/ActiveCart", () => ({
  default: () => <div data-testid="active-cart">Carrito con productos</div>,
}));

describe("Checkout Component", () => {
  test("muestra ActiveCart cuando hay productos en el carrito", () => {
    render(
      <CartProvider>
        <MemoryRouter> 
          <CartContext.Provider value={{ cart: [{ id: 1, eventName: "Rock Fest", price: 50 }] }}>
            <Checkout />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByTestId("active-cart")).toBeInTheDocument();
  });

  test("muestra EmptyCart cuando el carrito está vacío", () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: [] }}>
            <Checkout />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });
});
