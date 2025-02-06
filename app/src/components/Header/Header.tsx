import { testIds } from "@/tests/Components/Header/config";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export function Header(): JSX.Element {
  return <Wrapper data-testid={testIds.header}></Wrapper>;
}
