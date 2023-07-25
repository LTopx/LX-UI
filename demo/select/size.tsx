import {
  Select,
  Tabs,
  type SelectOption,
  type TabsOption,
} from "../../components";

export default function () {
  const options: SelectOption[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2", disabled: true },
    { label: "3", value: "3" },
  ];

  const onChange = (value: string) => {
    console.log(value, "value");
  };

  const tabOptions: TabsOption[] = [
    {
      label: "sm",
      value: "sm",
      children: (
        <Select
          className="w-60"
          placeholder="请选择"
          size="sm"
          options={options}
          onChange={onChange}
        />
      ),
    },
    {
      label: "base",
      value: "base",
      children: (
        <Select
          className="w-60"
          placeholder="请选择"
          options={options}
          onChange={onChange}
        />
      ),
    },
    {
      label: "lg",
      value: "lg",
      children: (
        <Select
          className="w-60"
          placeholder="请选择"
          size="lg"
          options={options}
          onChange={onChange}
        />
      ),
    },
  ];

  return <Tabs options={tabOptions} defaultActiveTab="sm" />;
}
