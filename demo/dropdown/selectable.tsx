import React from "react";
import { Dropdown, Button, type DropdownOption } from "../../components";

export default function () {
  const options: DropdownOption[] = [
    { label: "土豆,土豆", value: "111" },
    { label: "西红柿,西红柿", value: "222;" },
    { label: "马铃薯,马铃薯", value: "333" },
    { label: "番茄,番茄", value: "444" },
  ];

  const [value, setValue] = React.useState<string | number>("111");

  return (
    <div className="flex flex-wrap gap-2">
      <Dropdown options={options} selectable value={value} onSelect={setValue}>
        <Button type="primary">Selectable</Button>
      </Dropdown>
    </div>
  );
}
