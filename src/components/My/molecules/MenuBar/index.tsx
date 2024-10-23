import React from 'react';

const MenuBar = () => {
  // const router = useRouter();
  return (
    <div className="absolute left-[56px] top-[-16px] flex h-[110px] w-40 flex-col rounded-[10px] bg-gray-100 text-body3 tablet:left-[-164px] tablet:top-2 tablet:drop-shadow-menubar tablet:filter">
      <button
        // onClick={() => router.push('/my/edit')}
        className="w-full rounded-t-[10px] border-0 border-b-[1px] border-solid border-b-gray-200 p-2 text-white"
      >
        정보 수정
      </button>
      <button
        onClick={() => console.log('로그아웃')} //api 통신 할때 바꿀 예정
        className="w-full p-2 text-white"
      >
        로그아웃
      </button>
      <button
        onClick={() => console.log('서비스 탈퇴')} //api 통신 할때 바꿀 예정
        className="w-full border-0 border-t-[1px] border-solid border-t-gray-200 p-2 text-error"
      >
        서비스 탈퇴
      </button>
    </div>
  );
};

export default MenuBar;
