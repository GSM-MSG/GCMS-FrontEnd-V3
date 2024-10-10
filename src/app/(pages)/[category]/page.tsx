import ClubList from '@/components/Common/Club/Templates/ClubList';
import Header from '@/components/Common/Header';
import Alarm from '@/components/Home/atoms/Alarm';
import Navigate from '@/components/Home/atoms/Navigation';

export default function Home({ params }: { params: { category: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="mx-auto flex w-full max-w-[700px] flex-1 flex-col">
        <Header role="student" />
        <div className="flex flex-1 flex-col gap-y-8 py-5 mobile:px-5">
          <Alarm
            title="GCMS v3.0 개선 및 업데이트 소식"
            description="GCMS v3.0 개선 및 업데이트 소식을 전해드립니다. 2024년도 9월부터 msg에서 제작한 GCMS v3.0이 2025년도 4월달에 배포 후 전공동아리 모집 및 선발에 쓰일 예정입니다."
          />
          <Navigate />
          <ClubList category={params.category} />
        </div>
      </div>
    </div>
  );
}
