import { testIds } from "@/tests/Components/Footer/config";
import { Text } from "@/components/Text";
import { Wrapper } from "@components/Wrapper";

export function Footer(): JSX.Element {
  return (
    <Wrapper
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "lightgray",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
      }}
      data-testid={testIds.footer}
      height={2}
      width="100%"
    >
      <Text>Footer</Text>
    </Wrapper>
  );
}
