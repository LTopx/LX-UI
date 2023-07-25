import React from "react";
import {
  Accordion,
  Tabs,
  type AccordionItem,
  type TabsOption,
} from "../../components";

export default function () {
  const items: AccordionItem[] = [
    {
      label: "111",
      value: "111",
      children: <div>111</div>,
    },
    {
      label: "222",
      value: "222",
      children: <div>222</div>,
    },
    {
      label: "333",
      value: "333",
      children: <div>333</div>,
    },
  ];

  const tabOptions: TabsOption[] = [
    {
      label: "sm",
      value: "sm",
      children: <Accordion items={items} size="sm" />,
    },
    {
      label: "base",
      value: "base",
      children: <Accordion items={items} />,
    },
    {
      label: "lg",
      value: "lg",
      children: <Accordion items={items} size="lg" />,
    },
  ];

  return <Tabs options={tabOptions} defaultActiveTab="sm" />;
}
