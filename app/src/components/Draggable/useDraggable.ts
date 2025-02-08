import { useState, useRef, useCallback, useEffect } from "react";

type Point = {
  x: number;
  y: number;
};

export const useDraggable = () => {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const offsetRef = useRef<Point>({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: MouseEvent) => {
    if (isDraggingRef.current) {
      setPosition({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    window.removeEventListener("mousemove", handlePointerMove);
    window.removeEventListener("mouseup", handlePointerUp);
  }, [handlePointerMove]);

  const handlePointerDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true;
    // Calculate offset from the current pointer position relative to the element's position
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
  }, [position, handlePointerMove, handlePointerUp]);

  // Cleanup global event listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  return {
    position,
    handleMouseDown: handlePointerDown,
    isDraggingRef,
  };
};