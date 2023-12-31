import { Select, type SelectOption } from "../../components";

export default function () {
  const options: SelectOption[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2", disabled: true },
    { label: "3", value: "3" },
  ];

  const renderLabel = (item: SelectOption) => {
    return <div>😄{item.label}😄</div>;
  };

  return (
    <div className="flex gap-3">
      <Select
        className="w-60"
        placeholder="Please Select"
        options={options}
        renderLabel={renderLabel}
      />
    </div>
  );
}
