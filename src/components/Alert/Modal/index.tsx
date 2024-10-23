import { useState } from 'react';
import AttendanceCheckButtons from './atoms/AttendanceCheckButtons';
import Description from './atoms/Description';
import Footer from './atoms/Footer';
import Header from './atoms/Header';

interface Props {
  highlightText?: string;
  title: string;
  button1: string;
  button2: string;
  description?: string;
  button1Click: () => void;
  button2Click: {
    (): void;
    (selectedPeriod: number | null, reasons: Record<number, string>): void;
  };
  type: 'attendanceCheck' | 'confirm';
}

const Modal = ({
  highlightText,
  title,
  button1,
  button2,
  description,
  button1Click,
  button2Click,
  type,
}: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [reasons, setReasons] = useState<Record<number, string>>({});

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedPeriod !== null) {
      setReasons({ ...reasons, [selectedPeriod]: e.target.value });
    }
  };

  return (
    <div className="w-[286px] rounded-[14px] bg-[#232327] pt-4 text-center">
      <Header highlightText={highlightText} title={title} />
      <Description description={description} />

      {type === 'attendanceCheck' && (
        <AttendanceCheckButtons
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          reasons={reasons}
          handleReasonChange={handleReasonChange}
        />
      )}

      <Footer
        button1Click={button1Click}
        button2Click={button2Click}
        type={type}
        button1={button1}
        button2={button2}
        selectedPeriod={selectedPeriod}
        reasons={reasons}
      />
    </div>
  );
};

export default Modal;
