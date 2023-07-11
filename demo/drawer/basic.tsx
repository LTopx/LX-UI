import React from "react";
import { Drawer, Button } from "../../components";

export default function () {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Drawer
      </Button>
      <Drawer title="这是一个title" open={open} onClose={() => setOpen(false)}>
        <div>Drawer Content</div>
      </Drawer>
    </>
  );
}
