import React from "react";
import { Input } from "../../components";

export default function () {
  const [value, setValue] = React.useState("阿萨");

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Input className="w-52" size="sm" placeholder="请输入" />
      <Input
        className="w-52"
        placeholder="请输入"
        allowClear
        value={value}
        onChange={onChange}
      />
      <Input className="w-52" size="lg" placeholder="请输入" />
    </div>
  );
}
