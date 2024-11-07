import { useRouter } from 'next/navigation';
import React from 'react';
import PlusButton from '../../atoms/PlusButton';

const CreateClubButton = () => {
  const router = useRouter();

  return (
    <div className="flex h-full max-h-[157px] min-h-[121px] w-full min-w-[320px] max-w-[340px] flex-col items-center justify-center gap-[9px] rounded-md border-[2px] border-dashed border-main-800">
      <PlusButton onClick={() => router.push('/my/create')} />
      <p className="text-body3 text-white">동아리를 개설해보세요!</p>
    </div>
  );
};

export default CreateClubButton;
