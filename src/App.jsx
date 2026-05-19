import React, { useState, useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);
  const [hoverColor, setHoverColor] = useState('#ffffff');
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d'); 
    const radius = canvas.width / 2; 
    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const dx = x - radius;
        const dy = y - radius;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < radius) {
          let angle = Math.atan2(dy, dx);
          let degrees = angle * (180 / Math.PI);
          if (degrees < 0) {
            degrees += 360;
          }
          const sat = (distance / radius) * 100;
          const color = `hsl(${degrees}, ${sat}%, 50%)`;
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    if (pixel[3] !== 0) {
      const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
      setHoverColor(hex);
    }
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    if (pixel[3] !== 0) {
      const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
      setSelectedColor(hex); // <-- Swapped this to setSelectedColor!
    }
  };

  return ( 
    <div>
      <canvas 
        ref={canvasRef} 
        width={300} 
        height={300} 
        onMouseMove={(e) => handleMouseMove(e)} 
        onClick={(e) => handleCanvasClick(e)}
      />
      
      <div style={{ marginTop: '20px' }}>
        <p>Hovering: <span style={{ color: hoverColor }}>{hoverColor}</span></p>
        <p>Selected: {selectedColor ? <span style={{ color: selectedColor }}>{selectedColor}</span> : 'None'}</p>
      </div>
    </div>
  ); // <-- Removed the extra floating parenthetic clone
} // <-- Added the missing closing curly brace for the App function

export default App;