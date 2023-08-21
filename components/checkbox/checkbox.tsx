import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check_fill } from "../icon";

export interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <RadixCheckbox.Root defaultChecked className="border h-4 w-4">
      <RadixCheckbox.Indicator>
        <Check_fill />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
