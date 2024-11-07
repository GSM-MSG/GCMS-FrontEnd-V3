import { BlackPlus } from '@/assets/svg';

interface Props {
  onClick: () => void;
}

const PlusButton = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className="flex w-fit rounded-full bg-main-500 p-3">
      <BlackPlus />
    </div>
  );
};

export default PlusButton;
