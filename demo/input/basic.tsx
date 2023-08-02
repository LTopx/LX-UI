import React from "react";
import { Input } from "../../components";

export default function () {
  const [value, setValue] = React.useState<string | number>("123");

  return (
    <div className="flex flex-wrap gap-2">
      <Input
        className="w-52"
        placeholder="Please input"
        allowClear
        value={value}
        onChange={setValue}
      />
      <Input
        className="w-52"
        placeholder="Please input"
        allowClear
        defaultValue="hello world"
      />
      <Input
        className="w-52"
        placeholder="Please input"
        allowClear
        type="password"
      />
    </div>
  );
}
