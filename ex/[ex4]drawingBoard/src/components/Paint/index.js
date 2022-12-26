import { useEffect, useRef } from "react";

const Paint = ({
  command = "pen",
  color = "#000000",
  lineWidth = 2,
  width = 800,
  height = 600,
  style,
  className,
}) => {
  const canvasRef = useRef();

  const scale = typeof window === "undefined" ? 1 : window.devicePixelRatio;

  const canvasDefaultStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
  };

  const canvasSizeStyle = {
    width,
    height,
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = width * scale;
    canvasRef.current.height = height * scale;

    canvasRef.current.getContext("2d").scale(scale, scale);
  }, [canvasRef.current, scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{ ...canvasDefaultStyle, ...canvasSizeStyle, ...style }}
      className={className}
    />
  );
};

export default Paint;
