import React from "react";
import { Input, Tabs, type TabsOption } from "../../components";

export default function () {
  const tabOptions: TabsOption[] = [
    {
      label: "sm",
      value: "sm",
      children: (
        <Input
          className="w-52"
          placeholder="Please input"
          size="sm"
          allowClear
        />
      ),
    },
    {
      label: "base",
      value: "base",
      children: (
        <Input
          className="w-52"
          placeholder="Please input"
          size="base"
          allowClear
        />
      ),
    },
    {
      label: "lg",
      value: "lg",
      children: (
        <Input
          className="w-52"
          placeholder="Please input"
          size="lg"
          allowClear
        />
      ),
    },
  ];

  return <Tabs options={tabOptions} defaultActiveTab="sm" />;
}
