import { X } from '@/assets/icons';

interface Props {
  text: string;
}

const Snackbar = ({ text, ...props }: Props) => {
  return (
    <button
      {...props}
      className="flex gap-1 whitespace-nowrap rounded-md bg-gray-200 px-6 py-4 font-Pretendard text-body2 text-white"
    >
      <p>{text}</p>
      <X />
    </button>
  );
};

export default Snackbar;
