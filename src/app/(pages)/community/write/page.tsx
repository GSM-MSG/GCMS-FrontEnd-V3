'use client';

import { useState } from 'react';
import CommunityState from '@/components/Common/CommunityState';
import Header from '@/components/Common/Header';
import { TextArea } from '@/components/Community/atoms/TextArea';
import { Button } from '@/components/ui/Button';

export default function Write() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const isButtonDisabled = !title || !content;

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="relative mx-auto flex w-full max-w-[700px] flex-1 flex-col">
        <div className="mobile:hidden">
          <Header role="student" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <CommunityState />
          <div className="mobile:px-5">
            <TextArea
              placeholder="제목 입력"
              maxLength={30}
              text="text-h2"
              state={title}
              setState={setTitle}
            />
            <TextArea
              placeholder="내용 입력"
              maxLength={1000}
              text="text-body1"
              state={content}
              setState={setContent}
            />
          </div>
        </div>
        <div className="mb-5 w-full mobile:px-5">
          <Button className="w-full" disabled={isButtonDisabled}>
            업로드
          </Button>
        </div>
      </div>
    </div>
  );
}
