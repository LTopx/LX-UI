import { Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      <Button type="primary" block>
        Block
      </Button>
      <Button type="danger" rounded block>
        Block
      </Button>
    </div>
  );
}
