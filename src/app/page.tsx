import { Checkbox } from '@/components/ui/checkbox';
import TestButton from '@/shared/atoms/TestButton';
import Text from '@/shared/atoms/Text';

export default function Home() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <TestButton />
      <Text />
    </div>
  );
}
