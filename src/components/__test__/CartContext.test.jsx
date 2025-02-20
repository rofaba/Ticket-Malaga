import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { CartProvider, CartContext } from "../../context/CartContext";

describe("CartContext", () => {
  test("agrega un concierto al carrito correctamente", () => {
    const { result } = renderHook(() => React.useContext(CartContext), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(() => {
      result.current.addToCart({ id: 1, eventName: "Rock Fest", price: 50 });
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].id).toBe(1);
    expect(result.current.cart[0].quantity).toBe(1);
  });

  test("no permite agregar más de 6 entradas del mismo concierto", () => {
    const { result } = renderHook(() => React.useContext(CartContext), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(() => {
      for (let i = 0; i < 7; i++) {
        result.current.addToCart({ id: 1, eventName: "Rock Fest", price: 50 });
      }
    });

    expect(result.current.cart[0].quantity).toBe(6);
  });

  test("remueve un concierto del carrito correctamente", () => {
    const { result } = renderHook(() => React.useContext(CartContext), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(() => {
      result.current.addToCart({ id: 1, eventName: "Rock Fest", price: 50 });
      result.current.removeFromCart(1);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  test("actualiza la cantidad de un concierto en el carrito", () => {
    const { result } = renderHook(() => React.useContext(CartContext), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(() => {
      result.current.addToCart({ id: 1, eventName: "Rock Fest", price: 50 });
      result.current.updateQuantity(1, 3);
    });

    expect(result.current.cart[0].quantity).toBe(3);
  });
});
