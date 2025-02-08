import { PropsWithChildren } from "react";
import { useDraggable } from "./useDraggable";
import * as S from "./Draggable.style";

export const Draggable = ({ children }: PropsWithChildren): JSX.Element => {
  const { position, handleMouseDown, isDraggingRef } = useDraggable();

  return (
    <S.Draggable
      isDragging={isDraggingRef.current}
      position={position}
      onMouseDown={handleMouseDown}
    >
      {children}
    </S.Draggable>
  );
};
