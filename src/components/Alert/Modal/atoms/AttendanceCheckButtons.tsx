import { Button } from '@/components/ui/Button';

interface Props {
  selectedPeriod: number | null;
  setSelectedPeriod: (period: number) => void;
  reasons: Record<number, string>;
  handleReasonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AttendanceCheckButtons = ({
  selectedPeriod,
  setSelectedPeriod,
  reasons,
  handleReasonChange,
}: Props) => (
  <div className="mx-[16px] mt-3 pl-2 pr-2">
    <div className="flex justify-center gap-2">
      {[8, 9, 10, 11].map((number) => (
        <Button
          variant="default"
          key={number}
          className={`${selectedPeriod === number ? 'bg-[#A4E335]' : 'bg-[#333338] !text-[#9F9FA8]'}`}
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
);

export default AttendanceCheckButtons;
