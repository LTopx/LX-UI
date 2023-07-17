import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip title="这是 Tooltip 显示的内容" align="start">
        <Button>Tooltip Start</Button>
      </Tooltip>
      <Tooltip title="这是 Tooltip 显示的内容" align="center">
        <Button>Tooltip Center</Button>
      </Tooltip>
      <Tooltip title="这是 Tooltip 显示的内容" align="end">
        <Button>Tooltip End</Button>
      </Tooltip>
    </div>
  );
}
