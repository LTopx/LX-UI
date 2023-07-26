import React from "react";
import { Tabs, type TabsOption } from "../../components";

export default function () {
  const [active, setActive] = React.useState("1");

  const options: TabsOption[] = [
    {
      label: "Tab1",
      value: "1",
      children: <div>xxxxx</div>,
    },
    {
      label: "Tab2",
      value: "2",
      children: <div>yyyyy</div>,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div>{active}</div>
      <Tabs options={options} activeTab={active} onChange={setActive} />
    </div>
  );
}
