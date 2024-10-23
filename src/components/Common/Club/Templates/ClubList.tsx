import React from 'react';
import Club from '@/components/Common/Club/organisms/Club';

const ClubList = ({ category }: { category?: string }) => {
  console.log(category);
  return (
    <div className="grid w-fit grid-cols-2 place-items-center gap-5 mobile:grid-cols-1">
      {[...Array(8)].map((_, index) => (
        <Club
          key={index}
          notion={true}
          href="https://github.com/GSM-MSG/GCMS-FrontEnd-V3"
          clubName="깨소금"
          description="깨소금은 맛소금과 함께 활동하는 동아리로 GCMS, Gauth, SMS, Hi, 등이 있습니다."
          recruitmentStatus="open"
          recruitmentCount={5}
        />
      ))}
    </div>
  );
};

export default ClubList;
