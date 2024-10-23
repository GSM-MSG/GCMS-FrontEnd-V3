import CreateClubButton from '../../molecules/CreateClubButton';
import Club from '@/components/Common/Club/organisms/Club';

const MyClubList = () => {
  return (
    <div className="grid w-full max-w-[700px] grid-cols-2 place-items-center gap-5 mobile:grid-cols-1">
      {[...Array(3)].map((_, index) => (
        <Club
          key={index}
          notion={true}
          href="https://github.com/GSM-MSG/GCMS-FrontEnd-V3"
          clubName="깨소금"
          description="깨소금은 맛소금과 함께 활동하는 동아리로 GCMS, Gauth, SMS, Hi, 등이 있습니다."
          recruitmentStatus="open"
          recruitmentCount={5}
        />
      ))}
      <CreateClubButton />
    </div>
  );
};

export default MyClubList;
