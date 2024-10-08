import React from 'react';

interface Props {
  onClick: () => void;
  current: boolean;
  text: string;
}

const NavLink = ({ onClick, current, text }: Props) => {
  return (
    <p
      onClick={onClick}
      className={`cursor-pointer text-body2 ${
        current ? 'text-main-500' : 'text-gray-600'
      }`}
    >
      {text}
    </p>
  );
};

export default NavLink;
