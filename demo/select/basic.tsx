import React from "react";
import { Select, type SelectOption } from "../../components";

export default function () {
  const options: SelectOption[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2", disabled: true },
    { label: "3", value: "3" },
  ];

  const [value, setValue] = React.useState<number>(1);

  const onChange = (value: string) => {
    console.log(value, "value");
  };

  const onChangeValue = (value: number) => {
    setValue(value);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Select
        className="w-60"
        placeholder="Please Select"
        options={options}
        onChange={onChange}
      />
      <Select
        className="w-60"
        placeholder="Please Select"
        options={options}
        disabled
      />
      <Select
        className="w-60"
        placeholder="Please Select"
        loading
        options={[1, 2, 3]}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
}
