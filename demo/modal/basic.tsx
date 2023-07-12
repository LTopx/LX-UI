import React from "react";
import { Modal, Button } from "../../components";

export default function () {
  const [open, setOpen] = React.useState(false);

  const onClose = () => setOpen(false);

  return (
    <div className="flex">
      <Button type="primary" onClick={() => setOpen(true)}>
        Modal
      </Button>
      <Modal open={open} onClose={onClose}>
        <div>哇哈哈</div>
      </Modal>
    </div>
  );
}
