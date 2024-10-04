import React from 'react';
import Attendee from '../atoms/Attendee';
import RecruitmentClosed from '../atoms/RecruitmentClosed';
import RecruitmentCount from '../atoms/RecruitmentCount';

interface RecruitmentStatusProps {
  recruitmentStatus: 'open' | 'closed' | 'attendee' | 'none';
  recruitmentCount?: number;
  attendeeCount?: number;
  totalMemberCount?: number;
}

const RecruitmentStatus = ({
  recruitmentStatus,
  recruitmentCount,
  attendeeCount,
  totalMemberCount,
}: RecruitmentStatusProps) => {
  switch (recruitmentStatus) {
    case 'open':
      return <RecruitmentCount recruitmentCount={recruitmentCount} />;
    case 'closed':
      return <RecruitmentClosed />;
    case 'attendee':
      return (
        <Attendee
          attendeeCount={attendeeCount}
          totalMemberCount={totalMemberCount}
        />
      );
    default:
      return null;
  }
};

export default RecruitmentStatus;
