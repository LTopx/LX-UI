import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip title="Tooltip content" align="start">
        <Button>Tooltip Start</Button>
      </Tooltip>
      <Tooltip title="Tooltip content" align="center">
        <Button>Tooltip Center</Button>
      </Tooltip>
      <Tooltip title="Tooltip content" align="end">
        <Button>Tooltip End</Button>
      </Tooltip>
    </div>
  );
}
