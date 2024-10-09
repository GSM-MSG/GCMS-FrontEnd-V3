'use client';

import React from 'react';
import TitleText from '../atoms/TitleText';
import { MobileNavBar } from '../molecules/MobileNavBar';
import NavLinks from '../molecules/NavLinks';

interface Props {
  role: 'student' | 'admin';
}

const Header = ({ role }: Props) => {
  return (
    <header className="flex items-center justify-center bg-black px-5 py-4 mobile:py-3">
      <div className="flex w-full max-w-[700px] justify-between">
        <TitleText />
        <NavLinks role={role} />
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Header;
