'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import TestProfileImg from '@/assets/png/testProfileImg.png';

interface Props {
  role: 'student' | 'admin';
}

const Header = ({ role }: Props) => {
  const [path, setPath] = useState(0);

  return (
    <header className="flex items-center justify-center bg-black py-4">
      <div className="flex w-[700px] justify-between">
        <p
          onClick={() => setPath(0)}
          className="cursor-pointer text-center text-h3 text-main-500"
        >
          GCMS
        </p>
        <div className="flex items-center gap-12">
          {role === 'student' && (
            <>
              <p
                onClick={() => setPath(1)}
                className={`cursor-pointer text-body2 ${
                  path === 1 ? 'text-main-500' : 'text-gray-600'
                }`}
              >
                내 동아리
              </p>
              <p
                onClick={() => setPath(2)}
                className={`cursor-pointer text-body2 ${
                  path === 2 ? 'text-main-500' : 'text-gray-600'
                }`}
              >
                커뮤니티
              </p>
            </>
          )}
          <p
            onClick={() => setPath(3)}
            className={`cursor-pointer text-body2 ${
              path === 3 ? 'text-main-500' : 'text-gray-600'
            }`}
          >
            공지사항
          </p>
          <Image
            width={24}
            height={24}
            src={TestProfileImg}
            alt="프로필"
            onClick={() => setPath(4)}
            className="cursor-pointer rounded-full text-body2 text-gray-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
