import { testIds } from "@/tests/Components/Footer/config";
import { Wrapper } from "@components/Wrapper";

export function Footer(): JSX.Element {
  return <Wrapper data-testid={testIds.footer}></Wrapper>;
}
