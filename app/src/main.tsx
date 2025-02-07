import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { Layout } from "./Layout.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient/index.ts";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: white;
    margin: 0;
    padding: 0;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Layout>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Layout>
  </StrictMode>,
);
