import React from "react";
import { DatePicker } from "../../components";

export default function () {
  const [date, setDate] = React.useState<Date>();

  const onChange = (value: Date | undefined) => {
    setDate(value);
  };

  return (
    <div className="flex gap-2">
      <DatePicker className="w-52" value={date} onChange={onChange} />
    </div>
  );
}
