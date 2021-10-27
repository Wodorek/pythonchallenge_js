import { useEffect, useRef } from 'react';

const Solution14 = () => {
  const srcCanvasRev = useRef<HTMLCanvasElement>(null);
  const outCanvasRev = useRef<HTMLCanvasElement>(null);

  //load the source image into srcCanvas
  useEffect(() => {
    const srcCanvas = srcCanvasRev.current;
    const srcCtx = srcCanvas?.getContext('2d');

    if (!srcCtx || !srcCanvas) {
      return;
    }

    const img = new Image();
    img.src = './wire.png';

    img.onload = () => {
      srcCanvas.height = img.height;
      srcCanvas.width = img.width;
      srcCtx.drawImage(img, 0, 0);
    };
  });

  //Create a spiral from srcCanvas to outCanvas
  const createSpiral = () => {
    const outCtx = outCanvasRev.current?.getContext('2d');
    const srcCtx = srcCanvasRev.current?.getContext('2d');

    //Stop TS from complaining
    if (!outCtx || !srcCtx) return;

    const delta = [
      [1, 0], //Go right
      [0, 1], //Go down
      [-1, 0], // Go left
      [0, -1], // Go up
    ];

    let x = -1; //start at -1 to put first pixel at 0:0 in first iteration
    let y = 0;
    let idx = 0;

    let d = 200; //200 not 100, since 100 would just fill half a spiral

    while (d / 2 > 0) {
      //go right, down, left, up and repeat
      for (const v of delta) {
        const steps = Math.floor(d / 2);
        for (let i = 0; i < steps; i++) {
          //move in correct direction
          x = x + v[0];
          y = y + v[1];

          //get pixel data and put it in outCanvas
          const pixel = srcCtx.getImageData(idx, 0, 1, 1);
          outCtx.putImageData(pixel, x, y);
          idx++;
        }
        d--;
      }
    }
  };

  return (
    <div>
      <canvas ref={srcCanvasRev}></canvas>
      <canvas ref={outCanvasRev} height={100} width={100}></canvas>
    </div>
  );
};

export default Solution14;
