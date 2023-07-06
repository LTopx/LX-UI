import { Select, type SelectOption } from "../../components";

export default function () {
  const options: SelectOption[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2", disabled: true },
    { label: "3", value: "3" },
  ];

  const onChange = (value: string) => {
    console.log(value, "value");
  };

  return (
    <div className="flex gap-3">
      <Select
        className="w-60"
        placeholder="请选择"
        options={options}
        onChange={onChange}
      />
      <Select
        className="w-60"
        placeholder="请选择"
        options={options}
        disabled
      />
      <Select
        className="w-60"
        placeholder="请选择"
        loading
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
