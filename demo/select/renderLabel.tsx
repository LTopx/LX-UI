import { Select, type SelectOption } from "../../components";

export default function () {
  const options: SelectOption[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2", disabled: true },
    { label: "3", value: "3" },
  ];

  const renderLabel = (item: any) => {
    return <div>😄{item.label}😄</div>;
  };

  return (
    <div className="flex gap-3">
      <Select
        className="w-60"
        placeholder="请选择"
        options={options}
        renderLabel={renderLabel}
      />
    </div>
  );
}
