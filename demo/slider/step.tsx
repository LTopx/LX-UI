import React from "react";
import { Slider } from "../../components";

export default function () {
  return (
    <div className="flex flex-col gap-2">
      <Slider defaultValue={30} max={100} step={10} />
    </div>
  );
}
