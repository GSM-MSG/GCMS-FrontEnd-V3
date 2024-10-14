import Link from 'next/link';
import React from 'react';
import { Link as LinkIcon } from '@/assets/icons';

interface Props {
  title: string;
  content: string;
  link: string;
}

const NoticeDetail = ({ title, content, link }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-h5 text-white">{title}</p>
      <div className="flex w-full flex-col gap-5">
        <p className="text-body2 text-gray-800">{content}</p>
        <Link href={link} className="flex w-full items-center">
          <LinkIcon />
          <p className="truncate text-body3 text-gray-800">{link}</p>
        </Link>
      </div>
    </div>
  );
};

export default NoticeDetail;
