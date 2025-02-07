import { testIds } from "@/tests/Components/Header/config";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Text } from "@/components/Text";

export function Header(): JSX.Element {
  return (
    <Wrapper
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "lightgray",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      width="100%"
      data-testid={testIds.header}
    >
      <Text>Header</Text>
    </Wrapper>
  );
}
