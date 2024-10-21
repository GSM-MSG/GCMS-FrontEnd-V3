import React from 'react';
import IconState from '../../atoms/IconState';
import { Heart } from '@/assets/icons';

interface Props {
  title: string;
  contents: string;
  count: number;
}

const CommunityDetailContent = ({ title, contents, count }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-h3 text-white">{title}</p>
          <p className="text-body2 text-gray-800">{contents}</p>
        </div>
        <div className="border-red flex justify-center border-1 px-3 py-1">
          <button className="w-fit rounded-sm border-1 border-solid border-gray-200 px-4 py-1">
            <IconState Icon={Heart} count={count} />
          </button>
        </div>
        <div className="h-px w-full bg-gray-300" />
      </div>
    </div>
  );
};

export default CommunityDetailContent;
