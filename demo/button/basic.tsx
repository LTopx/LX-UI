import { Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button outline>Default</Button>
        <Button type="primary" outline>
          Primary
        </Button>
        <Button type="success" outline>
          Success
        </Button>
        <Button type="warning" outline>
          Warning
        </Button>
        <Button type="danger" outline>
          Danger
        </Button>
      </div>
    </div>
  );
}
