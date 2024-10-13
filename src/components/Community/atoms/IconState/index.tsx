import React from 'react';

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count: number;
}

const IconState = ({ Icon, count }: Props) => {
  return (
    <div className="flex w-full">
      <Icon />
      <p className="text-body1 text-gray-600">{count}</p>
    </div>
  );
};

export default IconState;
