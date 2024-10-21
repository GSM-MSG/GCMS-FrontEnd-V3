import React from 'react';
import CommunityDetailComment from '../../molecules/\bCommunityDetailComment';

interface Props {
  commentData: { [key: string]: string };
}

const CommunityCommentList = ({ commentData }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(commentData).map(([key, value]) => (
        <CommunityDetailComment key={key} content={value} />
      ))}
    </div>
  );
};

export default CommunityCommentList;
