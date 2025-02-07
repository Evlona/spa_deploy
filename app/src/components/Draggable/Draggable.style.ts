import styled from "styled-components";
import { Wrapper } from "../Wrapper";

export const Draggable = styled(Wrapper).attrs<{
  isDragging: boolean;
  position: { x: number; y: number };
}>(({ isDragging, position }) => ({
  style: {
    cursor: isDragging ? "grabbing" : "grab",
    transform: `translate(${position.x}px, ${position.y}px)`,
    position: "absolute",
    userSelect: "none",
    WebkitUserSelect: "none",
  },
}))``;
