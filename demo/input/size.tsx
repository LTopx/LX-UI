import React from "react";
import { Input, Tabs, type TabsOption } from "../../components";

export default function () {
  const tabOptions: TabsOption[] = [
    {
      label: "sm",
      value: "sm",
      children: (
        <Input className="w-52" placeholder="请输入" size="sm" allowClear />
      ),
    },
    {
      label: "base",
      value: "base",
      children: (
        <Input className="w-52" placeholder="请输入" size="base" allowClear />
      ),
    },
    {
      label: "lg",
      value: "lg",
      children: (
        <Input className="w-52" placeholder="请输入" size="lg" allowClear />
      ),
    },
  ];

  return <Tabs options={tabOptions} defaultActiveTab="sm" />;
}
