import React from 'react';
import { Pencil } from '@/assets/icons';

const CreatePostButton = () => {
  return (
    <div className="w-fit rounded-[50px] bg-main-500 p-3 hover:cursor-pointer">
      <Pencil />
    </div>
  );
};

export default CreatePostButton;
