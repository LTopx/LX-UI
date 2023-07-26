import React from "react";
import { Tooltip, Button } from "../../components";

export default function () {
  return (
    <div className="flex flex-wrap">
      <Tooltip title="Tooltip content">
        <Button>Tooltip</Button>
      </Tooltip>
    </div>
  );
}
