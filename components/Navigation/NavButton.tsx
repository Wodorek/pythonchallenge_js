import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';

interface IProps {
  id: string | number;
}

const NavButton: React.FC<IProps> = (props) => {
  const router = useRouter();

  const activeClass = router.query.solution === props.id ? 'border-l-4' : '';

  return (
    <Link href={`/solutions/${props.id}`}>
      <div
        className={`box-border border-gray-700 h-12 flex items-center mb-2 cursor-pointer  ${activeClass}`}
      >
        <span className="p-2">Challenge {props.id}</span>
      </div>
    </Link>
  );
};

export default NavButton;
