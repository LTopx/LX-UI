import React from "react";
import { Tabs, type TabsOption } from "../../components";

export default function () {
  const options: TabsOption[] = [
    {
      label: "Tab1Tab1Tab1Tab1Tab1Tab1",
      value: "1",
      children: (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia, incidunt corporis deleniti explicabo nihil nesciunt dolorem
          maiores, optio doloremque harum debitis sed laudantium repellendus sit
          non sequi iure dolor.
        </div>
      ),
    },
    {
      label: "Tab2Tab2Tab2Tab2Tab2",
      value: "2",
      children: <div>yyyyy</div>,
    },
    {
      label: "Tab3Tab3Tab3Tab3",
      value: "3",
      children: <div>xxxxx</div>,
    },
    {
      label: "Tab4",
      value: "4",
      children: <div>yyyyy</div>,
    },
  ];

  return <Tabs options={options} defaultActiveTab="1" />;
}
