import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import { ArrowLeft } from '@/assets/icons';

const CommunityState = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex w-full items-center px-5 py-4 mobile:py-3">
      <div className="flex-none cursor-pointer" onClick={handleGoBack}>
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

export default CommunityState;
