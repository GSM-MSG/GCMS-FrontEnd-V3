'use client';

import Header from '@/components/Common/Header/organisms/Header';
import MyClubBanner from '@/components/My/molecules/MyClubBanner';
import MyClubList from '@/components/My/organisms/MyClubList';
import ProfileBanner from '@/components/My/organisms/ProfileBanner';

export default function MyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header role="student" />
      <div className="flex flex-col items-center gap-8 pt-[23px]">
        <div className="flex w-full flex-col items-center gap-4">
          <ProfileBanner name="장예슬" career="UI/UX" />
          <MyClubBanner />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-h4 text-white">개설한 동아리</p>
          <MyClubList />
        </div>
      </div>
    </div>
  );
}
