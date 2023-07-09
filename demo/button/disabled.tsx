import { Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="success" disabled>
          Success
        </Button>
        <Button type="warning" disabled>
          Warning
        </Button>
        <Button type="danger" disabled>
          Danger
        </Button>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button outline disabled>
          Default
        </Button>
        <Button type="primary" outline disabled>
          Primary
        </Button>
        <Button type="success" outline disabled>
          Success
        </Button>
        <Button type="warning" outline disabled>
          Warning
        </Button>
        <Button type="danger" outline disabled>
          Danger
        </Button>
      </div>
    </div>
  );
}
