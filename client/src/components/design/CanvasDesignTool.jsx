import React, { useEffect, useRef, useState } from 'react';

function CanvasDesignTool({ designDimensionsAndData }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [divisionInt, setDivisionInt] = useState(5);

  const [canvasStartingPoints, setCanvasStartingPoints] = useState({
    xAxis: 0,
    yAxis: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    var rect = canvas.parentNode.getBoundingClientRect();

    // set canvas to visible colour
    canvas.style.backgroundColor = '#bee0ec';

    // Set canvas to fit
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Set the context
    const context = canvas.getContext('2d');

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;

    // Clear the canvas when the component mounts or the table dimensions change
    clearCanvas();
    drawBorder();
    // Redraw the rectangle whenever the table dimensions change
    drawRectangleLines();
  }, [designDimensionsAndData]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawBorder = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    // Draw the black border (outline) around the canvas
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.strokeRect(0, 0, canvas.width, canvas.height);
  };

  const drawRectangleLines = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    console.log('canvasWidth', canvasWidth, canvasHeight);
    // Calculate the width and height of the rectangle
    let width = designDimensionsAndData.width;
    let length = designDimensionsAndData.length;
    console.log('width: ' + width + ' length: ' + length);

    width *= 2
    length *= 2

    if (width > canvasWidth || length > canvasHeight) {
      console.log('XXXXXXXXXXXXXXXx');
      let widthDiff = width - canvasWidth;
      let lengthDiff = length - canvasHeight;
      console.log('width d: ' + widthDiff + ' height d: ' + lengthDiff);

      // width = widthDiff - 100
      length = lengthDiff - 100;
    }
    // if (width > canvas.width && width < canvas.width * 2) {
    //   width = width / 2;
    //   height = height / 2;
    // }

    // if (height > canvas.height && height < canvas.height * 2) {
    //   width = width / 2;
    //   height = height / 2;
    // }

    // if (height > canvas.height * 2 && height < canvas.height * 3) {
    //   width = width / 2.2;
    //   height = height / 2.2;
    // }

    // if (width > canvas.width * 2 && width < canvas.width * 3) {
    //   width = width / 2.2;
    //   height = height / 2.2;
    // }

    // Calculate the starting position for the rectangle to center it
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - length) / 2;

    // Draw the inner rectangle
    context.strokeStyle = 'blue'; // Set the color for the inner rectangle
    context.lineWidth = 1; // Set the width for the inner rectangle border
    context.strokeRect(x, y, width, length);
  };

  return <canvas ref={canvasRef} />;
}

export default CanvasDesignTool;
