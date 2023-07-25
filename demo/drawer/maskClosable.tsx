import React from "react";
import { Drawer, Button } from "../../components";

export default function () {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex">
      <Button type="primary" onClick={() => setOpen(true)}>
        Drawer
      </Button>
      <Drawer
        title="这是一个title"
        maskClosable={false}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>Drawer Content</div>
      </Drawer>
    </div>
  );
}
