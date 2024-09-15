import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      <Button>하이</Button>
      <Button variant="Secondary">하이</Button>
      <Button variant="Text">하이</Button>
      <Button disabled={true}>하이</Button>
      <Button variant="Secondary" disabled={true}>
        하이
      </Button>
      <Button variant="Text" disabled={true}>
        하이
      </Button>
    </div>
  );
}
