import { useState, useRef, useCallback, useEffect } from "react";

type Point = {
  x: number;
  y: number;
};

export const useDraggable = () => {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const offsetRef = useRef<Point>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDraggingRef.current) {
      setPosition({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(
    (window: Window, e: React.MouseEvent) => {
      isDraggingRef.current = true;
      // Calculate offset based on current position and pointer location
      offsetRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [position, handleMouseMove, handleMouseUp],
  );

  // Cleanup if component unmounts while dragging
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    position,
    handleMouseDown,
    isDraggingRef,
  };
};
