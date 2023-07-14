import React from "react";
import { Input, Button } from "../../components";

export default function () {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFocus = () => inputRef.current?.focus();

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="primary" onClick={onFocus}>
        聚焦Input
      </Button>
      <Input className="w-52" placeholder="请输入" allowClear ref={inputRef} />
    </div>
  );
}
