import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import { CartProvider, CartContext } from "../../context/CartContext";
import ActiveCart from "../ActiveCart";

describe("ActiveCart Component", () => {
  test("muestra los productos en el carrito correctamente", () => {
    const mockCart = [
      { id: 1, eventName: "Rock Fest", price: 50, quantity: 2 },
    ];
    
    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: mockCart, removeFromCart: vi.fn(), updateQuantity: vi.fn() }}>
            <ActiveCart />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );
    
    expect(screen.getByText("Carrito de Compras")).toBeInTheDocument();
    expect(screen.getByText("Rock Fest")).toBeInTheDocument();
    expect(screen.getByText("Precio: $50")).toBeInTheDocument();
    expect(screen.getByText("Total: $100")).toBeInTheDocument();
  });

  test("llama a removeFromCart cuando se elimina un producto", () => {
    const mockRemoveFromCart = vi.fn();
    const mockCart = [{ id: 1, eventName: "Rock Fest", price: 50, quantity: 2 }];

    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: mockCart, removeFromCart: mockRemoveFromCart, updateQuantity: vi.fn() }}>
            <ActiveCart />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );

    const removeButton = screen.getByText("Eliminar");
    fireEvent.click(removeButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });

  test("cambia la cantidad de un producto correctamente", () => {
    const mockUpdateQuantity = vi.fn();
    const mockCart = [{ id: 1, eventName: "Rock Fest", price: 50, quantity: 2 }];

    render(
      <CartProvider>
        <MemoryRouter>
          <CartContext.Provider value={{ cart: mockCart, removeFromCart: vi.fn(), updateQuantity: mockUpdateQuantity }}>
            <ActiveCart />
          </CartContext.Provider>
        </MemoryRouter>
      </CartProvider>
    );

    const quantityInput = screen.getByDisplayValue("2");
    fireEvent.change(quantityInput, { target: { value: "3" } });
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });
});
