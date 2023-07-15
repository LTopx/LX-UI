import React from "react";
import { Progress } from "../../components";

export default function () {
  return (
    <div className="flex flex-col gap-2">
      <Progress type="primary" value={20} size="sm" />
      <Progress type="primary" value={30} />
      <Progress type="primary" value={40} size="lg" />
    </div>
  );
}
