import React from 'react';

import CommunityItems from '../../molecules/CommunityItems';

interface Props {
  title: string;
  contents: string;
  heartCount: number;
  chatCount: number;
}

const CommunityList = ({ title, contents, heartCount, chatCount }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {[...Array(8)].map((_, index) => (
        <CommunityItems
          key={index}
          title={title}
          contents={contents}
          heartCount={heartCount}
          chatCount={chatCount}
        />
      ))}
    </div>
  );
};

export default CommunityList;
