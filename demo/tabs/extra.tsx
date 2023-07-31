import React from "react";
import { Tabs, Button, type TabsOption } from "../../components";

export default function () {
  const options: TabsOption[] = [
    {
      label: "Tab1",
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
      label: "Tab2",
      value: "2",
      children: <div>yyyyy</div>,
    },
    {
      label: "Tab3",
      value: "3",
      children: <div>xxxxx</div>,
    },
  ];

  return (
    <Tabs
      options={options}
      defaultActiveTab="1"
      extra={<Button type="primary">Action</Button>}
    />
  );
}
