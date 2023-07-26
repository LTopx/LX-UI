import React from "react";
import { Tabs, type TabsOption } from "../../components";

export default function () {
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
    <div>
      <Tabs options={options} defaultActiveTab="1" />
    </div>
  );
}
