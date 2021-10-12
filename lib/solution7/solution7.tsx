import React, { useEffect, useRef } from 'react';
import Button from '../../components/UIElements/Button';

const Solution7 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = new Image();
    img.src = '/oxygen.png';
    img.onload = () => {
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      ctx?.drawImage(img, 0, 0, img.width, img.height);
    };
  }, []);

  const getImageData = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const pixels = [];

    let i = 0;

    while (i < 629) {
      const pixelData = ctx?.getImageData(i, 92 / 2, 1, 1);
      pixels.push(pixelData?.data[0]);
      i += 7;
    }

    //See console for the decoded message and the solution
    const decoded = pixels
      .map((num) => {
        return String.fromCharCode(num as number);
      })
      .join('');
    console.log(decoded);

    const matching = decoded.match(/(?<=\[)(.*?)(?=\])/);

    if (matching) {
      const finalString = matching[0]
        .split(',')
        .map((char) => {
          return String.fromCharCode(+char);
        })
        .join('');

      console.log(finalString);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <canvas className="mb-3" ref={canvasRef} />
      <Button onClick={() => getImageData()}>Try it!</Button>
    </div>
  );
};

export default Solution7;
