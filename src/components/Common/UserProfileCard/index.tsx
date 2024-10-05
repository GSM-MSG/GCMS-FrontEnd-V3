interface UserProfileCardProps {
  profileUrl: string;
  role: string;
  name: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  profileUrl,
  role,
  name,
}) => {
  return (
    <div className="flex h-[62px] w-[119px] rounded-md bg-[#232327] p-3">
      <img
        src={profileUrl}
        alt="Profile"
        className="mr-1 h-9 w-9 rounded-full object-cover"
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
