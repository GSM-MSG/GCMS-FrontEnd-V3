interface Props {
  button1Click: () => void;
  button2Click: {
    (): void;
    (selectedPeriod: number | null, reasons: Record<number, string>): void;
  };
  type: 'attendanceCheck' | 'confirm';
  button1: string;
  button2: string;
  selectedPeriod: number | null;
  reasons: Record<number, string>;
}

const Footer = ({
  button1Click,
  button2Click,
  type,
  button1,
  button2,
  selectedPeriod,
  reasons,
}: Props) => (
  <div className="mt-4 grid h-14 w-full grid-cols-2 border-t">
    <button
      className="w-full bg-transparent text-[#FFF]"
      onClick={button1Click}
      style={{
        borderTop: '0.33px solid #4B5563',
        borderRight: '0.33px solid #4B5563',
      }}
    >
      {button1}
    </button>
    <button
      className={`w-full bg-transparent text-[${type === 'confirm' ? '#FFF' : '#A4E335'}]`}
      onClick={() => {
        if (type === 'attendanceCheck') {
          button2Click(selectedPeriod, reasons);
        } else {
          button2Click();
        }
      }}
      style={{ borderTop: '0.33px solid #4B5563' }}
    >
      {button2}
    </button>
  </div>
);

export default Footer;
