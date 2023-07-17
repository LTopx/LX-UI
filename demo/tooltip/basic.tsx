import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap">
      <Tooltip title="这是 Tooltip 显示的内容">
        <Button>Tooltip</Button>
      </Tooltip>
    </div>
  );
}
