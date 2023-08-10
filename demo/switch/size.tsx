import React from "react";
import { Switch } from "../../components";

export default function () {
  return (
    <Switch
      className="h-4 w-8"
      thumbClassName="w-3 h-3 translate-x-0.5 data-[state=checked]:translate-x-[18px]"
    />
  );
}
