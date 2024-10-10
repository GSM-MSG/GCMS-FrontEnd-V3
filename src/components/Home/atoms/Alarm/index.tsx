import React from 'react';
import { X } from '@/assets/icons';

export interface Props {
  title: string;
  description: string;
}

const Alarm = ({ title, description }: Props) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-gray-100 px-4 py-3 text-white">
      <div className="flex items-center justify-between">
        <p className="text-h4">{title}</p>
        <label className="hover:cursor-pointer">
          <X />
        </label>
      </div>
      <p
        className="overflow-hidden text-body1 text-gray-600"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Alarm;
