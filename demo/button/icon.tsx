import { Button } from "../../components";
import { Close_line, Loading_line } from "../../components/icon";

export default function () {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      <Button type="primary">Primary</Button>
      <Button type="primary" icon={<Close_line />}>
        Primary
      </Button>
      <Button type="primary" rounded loading icon={<Loading_line />} />
    </div>
  );
}
