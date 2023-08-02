import React from "react";
import { Textarea, Button } from "../../components";
import useLocale from "@/hooks/useLocale";

export default function () {
  const tTextarea = useLocale("textarea");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const onFocus = () => textareaRef.current?.focus();

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="primary" onClick={onFocus}>
        {tTextarea("focus")}
      </Button>
      <Textarea
        className="w-52"
        placeholder="Please enter"
        allowClear
        ref={textareaRef}
      />
    </div>
  );
}
