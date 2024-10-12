import Image from 'next/image';

interface Props {
  profileUrl: string;
  role: string;
  name: string;
}

const UserProfileCard = ({ profileUrl, role, name }: Props) => {
  return (
    <div className="flex h-[62px] w-[119px] rounded-md bg-[#232327] p-3">
      <Image
        src={profileUrl}
        alt="Profile"
        className="mr-1 h-9 w-9 rounded-full object-cover"
        width={36}
        height={36}
      />
      <div className="w-[55px]">
        <p className="font-pretendard text-left text-[10px] font-normal leading-[18px] text-[#FFFFFF66]">
          {role}
        </p>
        <p className="font-pretendard text-left text-[14px] font-normal text-white">
          {name}
        </p>
      </div>
    </div>
  );
};

export default UserProfileCard;
