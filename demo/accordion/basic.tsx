import React from "react";
import { Accordion, type AccordionItem } from "../../components";

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

  return <Accordion items={items} />;
}
