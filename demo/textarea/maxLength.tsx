import React from "react";
import { Textarea } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Textarea
        className="w-52"
        placeholder="Please enter"
        allowClear
        maxLength={10}
      />
    </div>
  );
}
