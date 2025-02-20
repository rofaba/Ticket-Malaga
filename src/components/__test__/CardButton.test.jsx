import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import CardButton from "../CardButton";

describe("CardButton Component", () => {
  test("se renderiza correctamente", () => {
    render(<CardButton onClick={() => {}} />);
    expect(screen.getByRole("button", { name: /agregar al carrito/i })).toBeInTheDocument();
  });

  test("llama a la función onClick cuando se presiona el botón", () => {
    const mockOnClick = vi.fn();
    render(<CardButton onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /agregar al carrito/i });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

