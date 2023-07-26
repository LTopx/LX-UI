import React from "react";
import { Input, Button } from "../../components";
import { useLocale } from "@/hooks/useLocale";

export default function () {
  const tInput = useLocale("input");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFocus = () => inputRef.current?.focus();

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="primary" onClick={onFocus}>
        {tInput("focus")}
      </Button>
      <Input
        className="w-52"
        placeholder="Please input"
        allowClear
        ref={inputRef}
      />
    </div>
  );
}
