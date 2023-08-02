import React from "react";
import { Textarea } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Textarea
        className="w-52"
        placeholder="Please enter"
        allowClear
        disabled
        value="123"
      />
      <Textarea className="w-52" placeholder="Please enter" disabled />
    </div>
  );
}
