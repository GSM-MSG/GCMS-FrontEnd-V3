import Image from 'next/image';
import React from 'react';
import ClubInfo from '../molecules/ClubInfo';
import TestClubImg from '@/assets/png/testClubImg.png';
import { ClubProps } from '@/types/components/Club/club';

const Club = ({
  notion,
  href,
  clubName,
  description,
  recruitmentStatus,
  recruitmentCount,
  attendeeCount,
  totalMemberCount,
}: ClubProps) => {
  return (
    <div className="flex gap-x-4 rounded-md bg-gray-100 p-3">
      <div className="relative overflow-hidden">
        <Image
          src={TestClubImg}
          alt="TestClubImg"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="w-2/3">
        <ClubInfo
          notion={notion}
          href={href}
          clubName={clubName}
          description={description}
          recruitmentStatus={recruitmentStatus}
          recruitmentCount={recruitmentCount}
          attendeeCount={attendeeCount}
          totalMemberCount={totalMemberCount}
        />
      </div>
    </div>
  );
};

export default Club;
