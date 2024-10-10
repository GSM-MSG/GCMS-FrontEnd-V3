import { NullIcon } from '@/assets/svg';
import { Button } from '@/components/ui/Button';

const NullData = () => {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg">
        <NullIcon />
        <p className="mb-6 mt-4 text-body2 text-gray-600">
          아직 동아리가 등록되지 않았어요
        </p>
        <Button variant="default">동아리 등록하기</Button>
      </div>
    </div>
  );
};

export default NullData;
