import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const Text: React.FC<Props> = ({ ...props }) => {
  return (
    <div {...props}>
      <p className="text-h4 font-Pretendard text-gray-450">안녕</p>
      <p className="text-body1 font-Pretendard text-main-300">안녕</p>
    </div>
  );
};

export default Text;
