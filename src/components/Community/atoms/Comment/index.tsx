import React from 'react';

interface Props {
  content: string;
}

const Comment = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-1 bg-black">
      <p className="text-h5 text-gray-600">익명</p>
      <p className="text-body3 text-white">{content}</p>
      <p className="text-body3 text-gray-300">답글 달기</p>
    </div>
  );
};

export default Comment;
