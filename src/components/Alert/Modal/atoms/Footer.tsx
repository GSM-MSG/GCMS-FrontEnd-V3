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
  <div className="mt-4 grid h-14 w-full grid-cols-2">
    <button
      className="w-full border-0 border-r-[0.33px] border-t-[0.33px] border-solid border-r-[#4B5563] border-t-[#4B5563] bg-transparent text-[#FFF]"
      onClick={button1Click}
    >
      {button1}
    </button>
    <button
      className={`w-full bg-transparent text-[${type === 'confirm' ? '#FFF' : '#A4E335'}] border-0 border-t-[0.33px] border-solid border-t-[#4B5563]`}
      onClick={() => {
        if (type === 'attendanceCheck') {
          button2Click(selectedPeriod, reasons);
        } else {
          button2Click();
        }
      }}
    >
      {button2}
    </button>
  </div>
);

export default Footer;
