import React from "react";
import { Input } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Input
        className="w-52"
        placeholder="Please input"
        allowClear
        disabled
        value="123"
      />
      <Input className="w-52" placeholder="Please input" disabled />
    </div>
  );
}
