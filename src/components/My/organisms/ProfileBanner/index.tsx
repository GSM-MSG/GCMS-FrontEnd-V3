import Image from 'next/image';
import MenuBarButton from '../../molecules/MenuBarButton';
import { Person, Profile } from '@/assets/icons';

interface Props {
  name: string;
  career: string;
  src?: string;
}

const ProfileBanner = ({ src, name, career }: Props) => {
  return (
    <div className="flex h-[156px] w-full max-w-[700px] content-between rounded-[10px] bg-gray-100 p-[15px]">
      <Person />
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {src ? (
          <Image
            width={60}
            height={60}
            src={src}
            alt=""
            className="rounded-full"
          />
        ) : (
          <Profile width={60} height={60} />
        )}
        <div className="flex flex-col items-center">
          <p className="text-center text-h5 text-white">{name}</p>
          <p className="text-center text-label text-white text-opacity-30">
            {career}
          </p>
        </div>
      </div>
      <MenuBarButton />
    </div>
  );
};

export default ProfileBanner;
