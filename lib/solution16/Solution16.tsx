import { chunk } from 'lodash';
import { useEffect, useRef } from 'react';
import Button from '../../components/UIElements/Button';

const Solution16 = () => {
  const srcCanvasRef = useRef<HTMLCanvasElement>(null);
  const outCanvasRef = useRef<HTMLCanvasElement>(null);

  //load the source image into srcCanvas
  useEffect(() => {
    const srcCanvas = srcCanvasRef.current;
    const srcCtx = srcCanvas?.getContext('2d');

    const outCanvas = outCanvasRef.current;

    if (!srcCtx || !srcCanvas || !outCanvas) {
      return;
    }

    const img = new Image();
    img.src = './mozart.jpg';

    img.onload = () => {
      srcCanvas.height = img.height;
      srcCanvas.width = img.width;

      outCanvas.height = img.height;
      outCanvas.width = img.width;
      srcCtx.drawImage(img, 0, 0);
    };
  }, []);

  const shiftRows = () => {
    const srcCanvas = srcCanvasRef.current;
    const srcCtx = srcCanvas?.getContext('2d');

    const outCanvas = outCanvasRef.current;
    const outCtx = outCanvas?.getContext('2d');

    if (!srcCanvas || !srcCtx || !outCanvas || !outCtx) return;

    const imgData = srcCtx.getImageData(
      0,
      0,
      srcCanvas.width,
      srcCanvas.height
    );

    //split image data into separate lines
    const lines = chunk(imgData.data, srcCanvas.width * 4);

    console.log(lines);

    const pinkStripsIdxs: number[] = [];

    //find the location of pink strip in each line
    //what we are lookin for is (255,0,255) in rgb, a color called "fuchsia"
    lines.forEach((line) => {
      for (let i = 0; i < srcCanvas.width * 4; i++) {
        if (line[i] === 255) {
          if (line[i + 1] === 0 && line[i + 2] === 255) {
            return pinkStripsIdxs.push(i);
          }
        }
      }
    });

    //shift each pink strip to the beginning of the line

    const shifted = lines.map((line, idx) => {
      const toShift = line.slice(0, pinkStripsIdxs[idx]);
      const remainder = line.slice(pinkStripsIdxs[idx]);

      const afterShift = [...remainder, ...toShift];
      return afterShift;
    });

    //join all lines into single array
    const joined = shifted.flat(1);

    //paint the new lines
    const buffer = new Uint8ClampedArray(joined);
    const newImageData = new ImageData(
      buffer,
      outCanvas.width,
      outCanvas.height
    );
    outCtx?.putImageData(newImageData, 0, 0);
  };

  return (
    <div>
      <canvas ref={srcCanvasRef}></canvas>
      <canvas ref={outCanvasRef}></canvas>
      <Button onClick={() => shiftRows()}>Transform</Button>
    </div>
  );
};

export default Solution16;
