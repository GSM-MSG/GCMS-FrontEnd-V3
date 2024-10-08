import { useRouter } from 'next/navigation';
import React from 'react';

const TitleText = () => {
  const { push } = useRouter();

  return (
    <p
      onClick={() => push('/')}
      className="cursor-pointer text-center text-h3 text-main-500 mobile:text-h4"
    >
      GCMS
    </p>
  );
};

export default TitleText;
