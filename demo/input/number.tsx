import React from "react";
import { Input } from "../../components";
import useLocale from "@/hooks/useLocale";

export default function () {
  const tCommon = useLocale("common");
  const tInput = useLocale("input");

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="flex flex-col gap-0.5">
        <div>{tCommon("basic-usage")}</div>
        <Input
          className="w-52"
          placeholder="Please input"
          allowClear
          type="number"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <div>{tInput("configure")}</div>
        <Input
          className="w-52"
          placeholder="Please input"
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
