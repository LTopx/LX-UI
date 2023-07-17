import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip title="这是 Tooltip 显示的内容">
        <Button>Tooltip Auto</Button>
      </Tooltip>
      <Tooltip title="这是 Tooltip 显示的内容" side="top" sideOffset={20}>
        <Button>Tooltip Top</Button>
      </Tooltip>
      <Tooltip title="这是 Tooltip 显示的内容" side="bottom" sideOffset={0}>
        <Button>Tooltip Bottom</Button>
      </Tooltip>
    </div>
  );
}
