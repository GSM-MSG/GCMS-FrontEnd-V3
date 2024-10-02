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

const RecruitmentStatus: React.FC<RecruitmentStatusProps> = ({
  recruitmentStatus,
  recruitmentCount,
  attendeeCount,
  totalMemberCount,
}) => {
  if (recruitmentStatus === 'open') {
    return <RecruitmentCount recruitmentCount={recruitmentCount} />;
  }
  if (recruitmentStatus === 'closed') {
    return <RecruitmentClosed />;
  }
  if (recruitmentStatus === 'attendee') {
    return (
      <Attendee
        attendeeCount={attendeeCount}
        totalMemberCount={totalMemberCount}
      />
    );
  }
  return null;
};

export default RecruitmentStatus;
