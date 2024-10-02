import React from 'react';
import { ClubStroke } from '@/assets/svg';

interface Props {
  attendeeCount?: number;
  totalMemberCount?: number;
}

const Attendee = ({ attendeeCount, totalMemberCount }: Props) => {
  return (
    <div className="flex h-7 w-fit items-center gap-2 rounded-sm border-1 border-solid border-gray-200 px-2 py-1">
      <p className="text-body3 text-gray-800">출석인원</p>
      <ClubStroke />
      <p className="text-body3 text-gray-800">
        {attendeeCount}/
        <span className="text-gray-450">{totalMemberCount}</span>
      </p>
    </div>
  );
};

export default Attendee;
