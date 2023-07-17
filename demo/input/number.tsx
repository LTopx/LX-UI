import React from "react";
import { Input } from "../../components";

export default function () {
  return (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="flex flex-col gap-0.5">
        <div>基础用法</div>
        <Input className="w-52" placeholder="请输入" allowClear type="number" />
      </div>
      <div className="flex flex-col gap-0.5">
        <div>可配置最大最小以及精度属性</div>
        <Input
          className="w-52"
          placeholder="请输入"
          allowClear
          type="number"
          min={6}
          max={10}
          step={1}
        />
      </div>
    </div>
  );
}
