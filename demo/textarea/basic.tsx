import React from "react";
import { Textarea } from "../../components";

export default function () {
  const [value, setValue] = React.useState<string>("123");

  return (
    <div className="flex flex-wrap gap-2">
      <Textarea
        className="w-52"
        placeholder="Please enter"
        allowClear
        value={value}
        onChange={setValue}
      />
      <Textarea
        className="w-52"
        placeholder="Please enter"
        allowClear
        defaultValue="hello world"
      />
    </div>
  );
}
