import React from "react";
import { Drawer, Button } from "../../components";

export default function () {
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  return (
    <>
      <div className="flex gap-2">
        <Button type="primary" onClick={() => setOpenLeft(true)}>
          Left Drawer
        </Button>
        <Button type="primary" onClick={() => setOpenRight(true)}>
          Right Drawer
        </Button>
      </div>
      <Drawer
        title="This is a title."
        placement="left"
        open={openLeft}
        onClose={() => setOpenLeft(false)}
      >
        <div>Drawer Content</div>
      </Drawer>
      <Drawer
        title="This is a title."
        placement="right"
        open={openRight}
        onClose={() => setOpenRight(false)}
      >
        <div>Drawer Content</div>
      </Drawer>
    </>
  );
}
