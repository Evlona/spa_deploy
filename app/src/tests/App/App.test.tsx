import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "@/App";
import { testIds } from "@/tests/App/config";

describe("App", () => {
  it("renders the app", () => {
    render(<App />);
    expect(screen.getByTestId(testIds.app)).toBeInTheDocument();
  });
});
