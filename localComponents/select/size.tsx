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
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">sm</div>
        <Select
          className="w-60"
          placeholder="请选择"
          size="sm"
          options={options}
          onChange={onChange}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">base</div>
        <Select
          className="w-60"
          placeholder="请选择"
          options={options}
          onChange={onChange}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">lg</div>
        <Select
          className="w-60"
          placeholder="请选择"
          size="lg"
          options={options}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
