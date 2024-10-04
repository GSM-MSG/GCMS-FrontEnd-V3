import React from 'react';
import { ClubStroke } from '@/assets/svg';

interface Props {
  recruitmentCount?: number;
}

const RecruitmentCount = ({ recruitmentCount }: Props) => {
  return (
    <div className="flex h-7 w-fit items-center gap-2 rounded-sm border-1 border-solid border-gray-200 px-2 py-1">
      <p className="text-body3 text-gray-800">모집 예정인원</p>
      <ClubStroke />
      <p className="text-body3 text-gray-800">{recruitmentCount}명</p>
    </div>
  );
};

export default RecruitmentCount;
