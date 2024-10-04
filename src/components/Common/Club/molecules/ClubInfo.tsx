import React from 'react';
import NotionLink from '../atoms/NotionLink';
import RecruitmentStatus from './RecruitmentStatus';
import { ClubProps } from '@/types/components/Club/club';

const ClubInfo = ({
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
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-1">
        <p className="text-h5 text-gray-50">{clubName}</p>
        {notion ? (
          <NotionLink href={href} />
        ) : (
          <p className="text-label text-gray-50">전공동아리</p>
        )}
        <p
          className="overflow-hidden text-body3 text-gray-600"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>
      </div>
      <RecruitmentStatus
        recruitmentStatus={recruitmentStatus}
        recruitmentCount={recruitmentCount}
        attendeeCount={attendeeCount}
        totalMemberCount={totalMemberCount}
      />
    </div>
  );
};

export default ClubInfo;
