import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "@/components/Text/Text";
import { testIds } from "@/tests/Components/Text/config";

describe("Text", () => {
  it("renders Text component", () => {
    render(<Text />);
    expect(screen.getByTestId(testIds.text)).toBeInTheDocument();
  });
});
