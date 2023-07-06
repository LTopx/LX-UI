/**
 * title: 尺寸大小
 * description: 提供三种尺寸，定义数值与Tailwind CSS一致：`sm`、`base`、`lg`。默认尺寸为`base`
 */

import { Select } from '@ltopx/lx-ui';
import type { SelectOption } from '@ltopx/lx-ui/Select';
import React from 'react';

export default function () {
  const options: SelectOption[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2', disabled: true },
    { label: '3', value: '3' },
  ];
  const [value, setValue] = React.useState<string>();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">sm</div>
        <Select
          className="w-60"
          placeholder="请选择"
          loading={false}
          size="sm"
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">base</div>
        <Select
          className="w-60"
          placeholder="请选择"
          loading={false}
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-sm w-12">lg</div>
        <Select
          className="w-60"
          placeholder="请选择"
          loading={false}
          size="lg"
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}
