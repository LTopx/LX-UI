import { Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      <Button type="primary" href="https://www.baidu.com">
        Href
      </Button>
      <Button
        type="success"
        rounded
        href="https://www.baidu.com"
        target="_blank"
      >
        Href _Blank
      </Button>
    </div>
  );
}
