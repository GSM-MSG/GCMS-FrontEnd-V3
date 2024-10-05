interface Props {
  highlightText?: string;
  title: string;
  button1: string;
  button2: string;
  description?: string;
  button1Click: () => void;
  button2Click: () => void;
}

const ConfirmModal = ({
  highlightText,
  title,
  button1,
  button2,
  description,
  button1Click,
  button2Click,
}: Props) => {
  return (
    <div className="w-[270px] rounded-[14px] bg-gray-900 pt-4 text-center">
      <h2 className="font-pretendard mb-1 text-[16px] font-semibold text-white">
        <span className="text-[#A4E335]">{highlightText}</span> {title}
      </h2>
      <p className="font-pretendard px-4 text-center text-[14px] text-gray-400">
        {description &&
          description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </p>
      <div className="mt-4 grid h-14 w-full grid-cols-2 border-t">
        <button
          className="w-full bg-transparent text-white"
          onClick={button1Click}
          style={{
            borderTop: '0.33px solid #4B5563',
            borderRight: '0.33px solid #4B5563',
          }}
        >
          {button1}
        </button>
        <button
          className="w-full bg-transparent text-white"
          onClick={button2Click}
          style={{ borderTop: '0.33px solid #4B5563' }}
        >
          {button2}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
