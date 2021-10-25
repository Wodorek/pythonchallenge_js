import { useEffect, useRef } from 'react';
import first from './first';
//first is array of numbers: [146, 399, 163, 403, 170, 393, 169, etc...]

const Solution9 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    ctx?.beginPath();

    for (let i = 0; i < first.length; i += 2) {
      ctx?.lineTo(first[i], first[i + 1]);
      ctx?.stroke();
    }
    ctx?.fill();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} height={500} width={500} />
    </div>
  );
};

export default Solution9;
