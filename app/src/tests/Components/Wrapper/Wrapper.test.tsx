import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { testIds } from "@/tests/Components/Wrapper/config";

describe("Wrapper", () => {
  it("renders the wrapper", () => {
    render(<Wrapper />);
    expect(screen.getByTestId(testIds.wrapper)).toBeInTheDocument();
  });
});
