import React from "react";
import { Tabs, type TabsOption } from "../../components";

export default function () {
  const options: TabsOption[] = [
    {
      label: "Tab1",
      value: "1",
      children: <div>啊啊啊啊</div>,
    },
    {
      label: "Tab2",
      value: "2",
      children: <div>呃呃呃呃</div>,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <Tabs options={options} defaultActiveTab="1" size="sm" />
      <Tabs options={options} defaultActiveTab="1" />
      <Tabs options={options} defaultActiveTab="1" size="lg" />
    </div>
  );
}
