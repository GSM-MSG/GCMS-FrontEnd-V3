import Link from 'next/link';
import Header from '@/components/Common/Header/organisms/Header';

import CreatePostButton from '@/components/Community/atoms/CreatePostButton';
import CommunityList from '@/components/Community/organisms/CommunityList';

export default function Community() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="mx-auto flex w-full max-w-[700px] flex-1 flex-col">
        <Header role="student" />
        <div className="relative flex flex-1 flex-col gap-y-8 py-5 mobile:px-5">
          <CommunityList
            title="커뮤니티는 공통의 관심사,"
            contents="커뮤니티는 공통의 관심사, 목표, 가치, 혹은 지리적 위치를 공유하는 사람들로 이루어진 집단입니다. 이러한 집단은 개인들이 소속감을 느끼고 상호작용하며 협력하는 장소로서 중요한 역할을 합니다. 커뮤니티는 온라인과 오프라인에서 모두 존재할 수 있으며, 그 형태와 목적은 다양합니다."
            heartCount={24}
            chatCount={24}
          />
          <Link
            href="/community/write"
            className="sticky bottom-5 self-end mobile:bottom-16"
          >
            <CreatePostButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
