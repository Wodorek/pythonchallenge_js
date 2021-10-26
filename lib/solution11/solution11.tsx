import { useEffect, useRef } from 'react';

const Solution11 = () => {
  const sourceCanvasRef = useRef<HTMLCanvasElement>(null);
  const evenCanvasRef = useRef<HTMLCanvasElement>(null);
  const oddCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sourceCanvas = sourceCanvasRef.current;
    const sourceCtx = sourceCanvas?.getContext('2d');

    const evenCanvas = evenCanvasRef.current;

    const oddCanvas = oddCanvasRef.current;

    const img = new Image();
    img.src = './cave.jpg';

    //Stop typescript from complaining
    if (!sourceCanvas || !evenCanvas || !oddCanvas) return;

    img.onload = () => {
      sourceCanvas.height = img.height;
      evenCanvas.height = oddCanvas.height = img.height / 2;

      sourceCanvas.width = img.width;
      evenCanvas.width = oddCanvas.width = img.width / 2;

      sourceCtx?.drawImage(img, 0, 0);
      splitImages();
    };
  });

  const splitImages = () => {
    const sourceCanvas = sourceCanvasRef.current;
    const sourceCtx = sourceCanvas?.getContext('2d');

    const evenCanvas = evenCanvasRef.current;
    const evenCtx = evenCanvas?.getContext('2d');

    const oddCanvas = oddCanvasRef.current;
    const oddCtx = oddCanvas?.getContext('2d');

    //stop TS from complaining
    if (!sourceCanvas || !evenCanvas || !sourceCtx || !oddCanvas) {
      return;
    }

    for (let i = 0; i < sourceCanvas?.width; i++) {
      for (let j = 0; j < sourceCanvas.height; j++) {
        const pixelData = sourceCtx.getImageData(i, j, 1, 1);
        if (i % 2 === 0) {
          evenCtx?.putImageData(pixelData, i / 2, j / 2);
        } else {
          oddCtx?.putImageData(pixelData, i / 2, j / 2);
        }
      }
    }
  };

  return (
    <div>
      <canvas ref={sourceCanvasRef} id="1"></canvas>
      <canvas ref={evenCanvasRef} id="2"></canvas>
      <canvas ref={oddCanvasRef} id="3"></canvas>
    </div>
  );
};

export default Solution11;
