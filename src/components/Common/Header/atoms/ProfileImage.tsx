import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  src: string | StaticImport;
}

const ProfileImage = ({ src }: Props) => {
  const { push } = useRouter();

  return (
    <>
      <Image
        width={24}
        height={24}
        src={src}
        alt="프로필"
        onClick={() => push('/my')}
        className="cursor-pointer rounded-full text-body2 text-gray-600"
      />
    </>
  );
};

export default ProfileImage;
