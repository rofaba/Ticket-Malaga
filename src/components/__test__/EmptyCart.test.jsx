import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import EmptyCart from "../EmptyCart";

// Mock de useNavigate antes de renderizar el componente
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("EmptyCart Component", () => {
  test("muestra el mensaje cuando el carrito está vacío", () => {
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>
    );

    expect(screen.getByText("No tienes productos en tu carrito.")).toBeInTheDocument();
    expect(screen.getByText("¿En serio te vas a perder esos conciertos?")).toBeInTheDocument();
  });

  test("redirige a la tienda cuando se hace clic en el botón", () => {
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /volver a la tienda/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
