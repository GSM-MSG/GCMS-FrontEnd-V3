import Link from 'next/link';
import React from 'react';
import IconState from '../../atoms/IconState';
import { Chat, Heart } from '@/assets/icons';

interface Props {
  title: string;
  contents: string;
  heartCount: number;
  chatCount: number;
}

const CommunityItems = ({ title, contents, heartCount, chatCount }: Props) => {
  return (
    <Link
      href="/community/content"
      className="w-full rounded-md bg-gray-100 px-6 py-4"
    >
      <p className="truncate text-h4 text-white">{title}</p>
      <p className="line-clamp-2 text-body2 text-gray-600">{contents}</p>
      <div className="flex justify-end">
        <div className="flex gap-3">
          <IconState Icon={Heart} count={heartCount} />
          <IconState Icon={Chat} count={chatCount} />
        </div>
      </div>
    </Link>
  );
};

export default CommunityItems;
