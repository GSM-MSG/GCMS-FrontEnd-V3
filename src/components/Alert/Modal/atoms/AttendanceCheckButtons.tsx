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
  <div className="mx-4 mt-3 p-2">
    <div className="flex justify-center gap-2">
      {[8, 9, 10, 11].map((number) => (
        <Button
          variant="default"
          key={number}
          className={`${selectedPeriod === number ? 'bg-main-500' : 'bg-gray-300 !text-gray-600'}`}
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
        className="mt-3 w-full rounded-md bg-gray-300 px-4 py-3 text-gray-600"
      />
    )}
  </div>
);

export default AttendanceCheckButtons;
