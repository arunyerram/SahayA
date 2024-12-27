import React, { useRef, useState } from "react";

const Scribble = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000"); // Default black
  const [brushSize, setBrushSize] = useState(5); // Default brush size

  // Initialize canvas
  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8; // 80% width
    canvas.height = window.innerHeight;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctxRef.current = ctx;
  };

  const startDrawing = (e) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    ctxRef.current.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "scribble.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  // Update brush size
  const updateBrushSize = (e) => {
    setBrushSize(e.target.value);
    ctxRef.current.lineWidth = e.target.value;
  };

  // Update brush color
  const updateColor = (e) => {
    setColor(e.target.value);
    ctxRef.current.strokeStyle = e.target.value;
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Drawing Board */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{
          background: "white",
          border: "1px solid #ccc",
          flexGrow: 1,
          cursor: "crosshair",
        }}
        onLoad={prepareCanvas()}
      ></canvas>

      {/* Tools Sidebar */}
      <div
        style={{
          width: "20%",
          padding: "20px",
          backgroundColor: "#f4f4f4",
          borderLeft: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ margin: 0, textAlign: "center" }}>Tools</h2>

        {/* Color Picker */}
        <div>
          <label htmlFor="colorPicker">Brush Color:</label>
          <input
            id="colorPicker"
            type="color"
            value={color}
            onChange={updateColor}
            style={{ marginLeft: "10px" }}
          />
        </div>

        {/* Brush Size */}
        <div>
          <label htmlFor="brushSize">Brush Size:</label>
          <input
            id="brushSize"
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={updateBrushSize}
            style={{ marginLeft: "10px" }}
          />
        </div>

        {/* Clear Canvas */}
        <button onClick={clearCanvas} style={buttonStyle}>
          Clear Board
        </button>

        {/* Save Drawing */}
        <button onClick={saveImage} style={buttonStyle}>
          Save Drawing
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Scribble;
