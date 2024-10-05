import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface Props {
  highlightText?: string;
  title: string;
  button1: string;
  button2: string;
  description?: string;
  button1Click: () => void;
  button2Click: (
    selectedPeriod: number | null,
    reasons: Record<number, string>,
  ) => void;
}

const AttendanceCheckModal = ({
  highlightText,
  title,
  button1,
  button2,
  description,
  button1Click,
  button2Click,
}: Props) => {
  const buttonNumbers = [8, 9, 10, 11];

  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [reasons, setReasons] = useState<Record<number, string>>({});

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedPeriod !== null) {
      setReasons({ ...reasons, [selectedPeriod]: e.target.value });
    }
  };

  return (
    <div className="w-[286px] rounded-[14px] bg-gray-900 pt-4 text-center">
      <h2 className="font-pretendard mb-1 text-[16px] font-semibold leading-[24px] text-white">
        <span className="text-[#A4E335]">{highlightText}</span> {title}
      </h2>
      {description && (
        <p className="px-4 text-[14px] text-gray-400">
          {description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      )}
      <div className="mx-[16px] mt-3 pl-2 pr-2">
        <div className="flex justify-center gap-2">
          {buttonNumbers.map((number) => (
            <Button
              variant="default"
              key={number}
              className={
                selectedPeriod === number ? 'bg-[#A4E335]' : 'bg-[#333338]'
              }
              onClick={() => setSelectedPeriod(number)}
            >
              {number}
            </Button>
          ))}
        </div>

        {selectedPeriod !== null && (
          <input
            type="text"
            placeholder="사유, 위치를 적어주세요"
            value={reasons[selectedPeriod] || ''}
            onChange={handleReasonChange}
            className="mt-3 w-full rounded-[8px] bg-[#333338] px-[16px] py-[13px] text-[#9F9FA8]"
          />
        )}
      </div>
      <div className="mt-4 grid h-14 w-full grid-cols-2 border-t">
        <button
          className="w-full bg-transparent text-[#6F6F7B]"
          onClick={button1Click}
          style={{
            borderTop: '0.33px solid #4B5563',
            borderRight: '0.33px solid #4B5563',
          }}
        >
          {button1}
        </button>
        <button
          className="w-full bg-transparent text-[#A4E335]"
          onClick={() => button2Click(selectedPeriod, reasons)}
          style={{ borderTop: '0.33px solid #4B5563' }}
        >
          {button2}
        </button>
      </div>
    </div>
  );
};

export default AttendanceCheckModal;
