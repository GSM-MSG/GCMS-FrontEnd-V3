import React from 'react';
import Comment from '../../atoms/Comment';

interface Props {
  content: string;
}

const CommunityDetailComment = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <Comment content={content} />
    </div>
  );
};

export default CommunityDetailComment;
