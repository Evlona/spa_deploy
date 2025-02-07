import { Wrapper } from "@/components/Wrapper/Wrapper";
import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper width="100vw" height="100vh">
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
