import { Wrapper } from "@/components/Wrapper";
import { testIds } from "@tests/App/config";

export function App() {
  return (
    <Wrapper
      style={{ position: "relative" }}
      width="100%"
      height="100%"
      data-testid={testIds.app}
    >
      Coming soon...
    </Wrapper>
  );
}
