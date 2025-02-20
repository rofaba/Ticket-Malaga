import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import NotFound from "../../pages/NotFound";

// Mock de useNavigate para verificar la redirección
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("NotFound Component", () => {
  test("muestra el mensaje de error y la imagen", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("Página No Encontrada")).toBeInTheDocument();
    expect(screen.getByText("Lo sentimos, la página que buscas no existe.")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /pagina_no_encontrada/i })).toBeInTheDocument();
  });

  test("redirige a la tienda cuando se hace clic en el botón", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /volver a la tienda/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
