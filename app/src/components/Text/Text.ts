import styled from "styled-components";
import React from "react";
import { testIds } from "@/tests/Components/Text/config";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  "data-testid"?: string;
}

export const Text = styled.p.attrs<TextProps>((props) => ({
  "data-testid": props["data-testid"] ?? testIds.text,
}))<TextProps>`
  font-size: 16px;
  color: black;
`;
