import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, afterEach } from "vitest";
import { FilterProvider } from "../../context/filterContext";

// Mock de ConcertCard, ya que ConcertList lo usa
vi.mock("../ConcertCard", () => ({
  default: ({ concert }) => <div data-testid="concert-card">{concert.eventName}</div>,
}));

describe("ConcertList Component with empty data", () => {
  
  afterEach(() => {
    vi.resetModules();
  });

  test("muestra un mensaje cuando no hay conciertos disponibles", async () => {
    
    vi.doMock("../../data/concerts", () => ({ default: [] }));

    const { default: ConcertListEmpty } = await import("../ConcertList");

    render(
      <FilterProvider>
        <ConcertListEmpty />
      </FilterProvider>
    );
    
    expect(screen.getByText("No se encontraron conciertos")).toBeInTheDocument();
  });
});
