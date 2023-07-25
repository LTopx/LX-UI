import { Button } from "../../components";

export default function () {
  return (
    <div className="flex gap-8">
      <Button type="primary" size="sm">
        sm
      </Button>
      <Button type="primary">base</Button>
      <Button type="primary" size="lg">
        lg
      </Button>
    </div>
  );
}
