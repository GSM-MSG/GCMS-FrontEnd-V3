'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { ArrowLeft } from '@/assets/icons';

const Index = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full items-center">
      <div className="flex-none">
        <ArrowLeft />
      </div>
      <div className="flex flex-grow justify-center">
        <p className="text-h4 text-gray-600">
          {pathname === '/community' ? '글' : '글쓰기'}
        </p>
      </div>
    </div>
  );
};

export default Index;
