import { Wrapper } from "@/components/Wrapper/Wrapper";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper width="100vw" height="100vh">
      <Wrapper>navbar</Wrapper>
      {children}
      <Wrapper>footer</Wrapper>
    </Wrapper>
  );
}
