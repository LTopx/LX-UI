import React from "react";
import { Dropdown, Button, type DropdownOption } from "../../components";
import {
  Loading_line,
  Information_fill,
  Close_line,
} from "../../components/icon";

export default function () {
  const options: DropdownOption[] = [
    {
      label: (
        <div className="flex gap-1 items-center">
          <Loading_line />
          <div>土豆 土豆</div>
        </div>
      ),
      value: "111",
    },
    {
      label: (
        <div className="flex gap-1 items-center">
          <Information_fill />
          <div>西红柿 西红柿</div>
        </div>
      ),
      value: "222;",
    },
    { type: "seperate", value: "seperate-1" },
    {
      label: (
        <div className="flex gap-1 items-center">
          <Loading_line />
          <div>马铃薯 马铃薯</div>
        </div>
      ),
      value: "333",
    },
    {
      label: (
        <div className="flex gap-1 items-center">
          <Close_line />
          <div>番茄 番茄</div>
        </div>
      ),
      value: "444",
    },
  ];

  return (
    <div className="flex gap-2">
      <Dropdown options={options}>
        <Button type="primary">Dropdown</Button>
      </Dropdown>
      <Dropdown disabled options={options}>
        <Button type="primary" disabled>
          Dropdown
        </Button>
      </Dropdown>
    </div>
  );
}
