import ClubList from '@/components/Common/Club/Templates/ClubList';
import Header from '@/components/Common/Header';

export default function Clubs() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="mx-auto flex w-full max-w-[700px] flex-1 flex-col">
        <Header role="student" />
        <div className="flex flex-1 flex-col pb-5 mobile:px-5">
          <p className="py-7 text-h3 text-white">내 동아리</p>
          <ClubList />
        </div>
      </div>
    </div>
  );
}
