import React from 'react';
import NoticeListItem from '../../atoms/NoticeListItem';

interface Props {
  title: string;
  content: string;
}

const NoticeList = ({ title, content }: Props) => {
  return (
    <div className="scrollbar-gutter-stable flex max-h-[305px] flex-col items-center gap-3 overflow-y-auto bg-gray-100 px-4 py-3">
      {[...Array(8)].map((_, index) => (
        <NoticeListItem key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default NoticeList;
