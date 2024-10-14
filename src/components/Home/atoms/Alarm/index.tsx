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
        <p className="truncate text-h4">{title}</p>
        <label className="hover:cursor-pointer">
          <X />
        </label>
      </div>
      <p className="line-clamp-2 text-body1 text-gray-600">{description}</p>
    </div>
  );
};

export default Alarm;
