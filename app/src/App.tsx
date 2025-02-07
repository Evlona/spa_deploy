import { Wrapper } from "@/components/Wrapper";
import { Text } from "@/components/Text";
import { testIds } from "@tests/App/config";
import { Draggable } from "@/components/Draggable";

export function App() {
  return (
    <Wrapper
      style={{ position: "relative" }}
      width="100%"
      height="100%"
      data-testid={testIds.app}
    >
      <Draggable>
        <Text>DragMe</Text>
      </Draggable>
      <Draggable>
        <Text>DragMe</Text>
      </Draggable>
      <Draggable>
        <Text>DragMe</Text>
      </Draggable>
    </Wrapper>
  );
}
