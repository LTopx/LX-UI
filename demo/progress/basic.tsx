import React from "react";
import { Progress } from "../../components";

export default function () {
  return (
    <div className="flex flex-col gap-2">
      <Progress value={30} />
      <Progress type="primary" value={40} />
      <Progress type="success" value={50} />
      <Progress type="warning" value={70} />
      <Progress type="danger" value={20} />
    </div>
  );
}
