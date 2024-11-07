import { useRouter } from 'next/navigation';
import { ArrowRight } from '@/assets/icons';

const MyClubBanner = () => {
  const router = useRouter();

  return (
    <div className="flex h-14 w-full max-w-[700px] items-center justify-between rounded-[10px] bg-gray-100 px-4 py-2 mobile:py-3">
      <p className="border-0 border-b-[1px] border-solid border-main-500 text-body2 text-gray-700">
        내가 가입한 동아리가 궁금하다면?
      </p>
      <div className="flex items-center gap-1">
        <p className="text-body2 text-white mobile:hidden">
          내 동아리 바로 가기
        </p>
        <div
          onClick={() => router.push('/myClub')}
          className="flex cursor-pointer items-center"
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default MyClubBanner;
