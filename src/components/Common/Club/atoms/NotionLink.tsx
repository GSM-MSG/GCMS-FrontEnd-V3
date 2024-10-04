import Link from 'next/link';
import React from 'react';
import { LinkArrow } from '@/assets/icons';

const NotionLink = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="flex w-fit items-center gap-x-0.5">
      <p className="text-body3 text-main-600">노션 보러가기</p>
      <LinkArrow />
    </Link>
  );
};

export default NotionLink;
