import { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="text-white w-max px-2 py-1 shadow-sm hover:shadow-md text-xl rounded-md bg-indigo-600 hover:bg-indigo-700 border-2">
      {props.children}
    </button>
  );
};

export default Button;
