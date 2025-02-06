import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { testIds } from "./config";

describe("Header", () => {
  it("renders Header component", () => {
    render(<Header />);
    expect(screen.getByTestId(testIds.header)).toBeInTheDocument();
  });
});
