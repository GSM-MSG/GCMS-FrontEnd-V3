'use client';

import React, { useState } from 'react';
import CommunityState from '@/components/Common/CommunityState';
import Header from '@/components/Common/Header';
import Input from '@/components/Community/atoms/Input';
import CommunityDetailContent from '@/components/Community/molecules/\bCommunityDetailContent';
import CommunityCommentList from '@/components/Community/organisms/CommunityCommentList';

interface CommentData {
  [key: string]: string;
}

const Page = () => {
  const commentData: CommentData = {
    content1: '오 지리는데?',
    content2: '그니까',
    content3: '레전드',
  };
  const [inputValue, setInputValue] = useState<string>('');
  const [commentList, setCommentList] = useState<CommentData>(commentData);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
        <div className="sm:block hidden">
          <Header role="student" />
        </div>
        <main className="sm:px-0 flex flex-1 flex-col gap-8 px-4 pb-20">
          <CommunityState />
          <CommunityDetailContent
            title="커뮤니티는 공통의 관심사 목표 가치"
            contents="커뮤니티는 공통의 관심사 목표 가치 혹은 지리적 위치를 공유하는 사람들로 이루어진 집단입니다.ㅋ"
            count={24}
          />
          <CommunityCommentList commentData={commentList} />
        </main>
        <footer className="sticky bottom-0 bg-black p-4">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            commentList={commentList}
            setCommentList={setCommentList}
            placeholder="댓글은 최대 100자까지 쓸 수 있습니다."
          />
        </footer>
      </div>
    </div>
  );
};

export default Page;
