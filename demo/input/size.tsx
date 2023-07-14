import React from "react";
import { Tabs, Tab } from "nextra/components";
import { Input } from "../../components";

export default function () {
  return (
    <Tabs items={["sm", "base", "lg"]}>
      <Tab>
        <Input className="w-52" placeholder="请输入" size="sm" allowClear />
      </Tab>
      <Tab>
        <Input className="w-52" placeholder="请输入" size="base" allowClear />
      </Tab>
      <Tab>
        <Input className="w-52" placeholder="请输入" size="lg" allowClear />
      </Tab>
    </Tabs>
  );
}
