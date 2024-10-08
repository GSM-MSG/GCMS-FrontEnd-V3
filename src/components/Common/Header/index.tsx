'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Club, Community, Home, Notice, PersonRound } from '@/assets/icons';
import TestProfileImg from '@/assets/png/testProfileImg.png';

interface Props {
  role: 'student' | 'admin';
}

const Header = ({ role }: Props) => {
  const path = usePathname();
  const route = useRouter();

  return (
    <header className="flex items-center justify-center bg-black py-4 mobile:px-5 mobile:py-3">
      <div className="flex w-full max-w-[700px] justify-between">
        <p
          onClick={() => route.push('/')}
          className="cursor-pointer text-center text-h3 text-main-500 mobile:text-h4"
        >
          GCMS
        </p>
        <div className="flex items-center gap-12 mobile:hidden">
          {role === 'student' && (
            <>
              <p
                onClick={() => route.push('/myClub')}
                className={`cursor-pointer text-body2 ${
                  path === '/myClub' ? 'text-main-500' : 'text-gray-600'
                }`}
              >
                내 동아리
              </p>
              <p
                onClick={() => route.push('/community')}
                className={`cursor-pointer text-body2 ${
                  path === '/community' ? 'text-main-500' : 'text-gray-600'
                }`}
              >
                커뮤니티
              </p>
            </>
          )}
          <p
            onClick={() => route.push('/notice')}
            className={`cursor-pointer text-body2 ${
              path === '/notice' ? 'text-main-500' : 'text-gray-600'
            }`}
          >
            공지사항
          </p>
          <Image
            width={24}
            height={24}
            src={TestProfileImg}
            alt="프로필"
            onClick={() => route.push('my')}
            className="cursor-pointer rounded-full text-body2 text-gray-600"
          />
        </div>
        <div className="hidden mobile:fixed mobile:bottom-0 mobile:left-0 mobile:flex mobile:w-full mobile:justify-between mobile:bg-black mobile:px-5">
          <div onClick={() => route.push('/')} className="px-5 py-4">
            <Home current={path === '/'} />
          </div>
          <div onClick={() => route.push('/myClub')} className="px-5 py-4">
            <Club current={path === '/myClub'} />
          </div>
          <div onClick={() => route.push('/community')} className="px-5 py-4">
            <Community current={path === '/community'} />
          </div>
          <div onClick={() => route.push('/notice')} className="px-5 py-4">
            <Notice current={path === '/notice'} />
          </div>
          <div onClick={() => route.push('/my')} className="px-5 py-4">
            <PersonRound current={path === '/my'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
