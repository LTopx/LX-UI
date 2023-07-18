import React from "react";
import { Switch } from "../../components";

export default function () {
  const [checked, setChecked] = React.useState(false);

  return <Switch checked={checked} onChange={setChecked} />;
}
