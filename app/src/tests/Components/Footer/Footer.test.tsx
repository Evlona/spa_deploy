import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";
import { testIds } from "./config";

describe("Footer", () => {
  it(" render footer", () => {
    render(<Footer />);
    expect(screen.getByTestId(testIds.footer)).toBeInTheDocument();
  });
});
