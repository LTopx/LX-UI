import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip title="Tooltip content">
        <Button>Tooltip Auto</Button>
      </Tooltip>
      <Tooltip title="Tooltip content" side="top" sideOffset={20}>
        <Button>Tooltip Top</Button>
      </Tooltip>
      <Tooltip title="Tooltip content" side="bottom" sideOffset={0}>
        <Button>Tooltip Bottom</Button>
      </Tooltip>
    </div>
  );
}
