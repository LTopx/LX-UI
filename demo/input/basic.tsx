import React from "react";
import { Input } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Input className="w-52" placeholder="请输入" allowClear />
    </div>
  );
}
