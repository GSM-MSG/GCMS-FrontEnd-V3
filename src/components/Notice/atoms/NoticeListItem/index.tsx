import React from 'react';

interface Props {
  title: string;
  content: string;
}

const NoticeListItem = ({ title, content }: Props) => {
  return (
    <div className="w-full rounded-sm bg-black p-4 hover:cursor-pointer">
      <p className="truncate text-h5 text-white">{title}</p>
      <p className="line-clamp-2 pt-1 text-body3 text-gray-600">{content}</p>
    </div>
  );
};

export default NoticeListItem;
