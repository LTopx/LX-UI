import React from "react";
import { Modal, Button } from "../../components";

export default function () {
  const [open, setOpen] = React.useState(false);

  const onClose = () => setOpen(false);

  const onOk = () => setOpen(false);

  return (
    <div className="flex">
      <Button type="primary" onClick={() => setOpen(true)}>
        Modal
      </Button>
      <Modal
        title="这是一个标题"
        open={open}
        onClose={onClose}
        footer={
          <div className="flex gap-2 justify-end">
            <Button type="warning" onClick={onClose}>
              自定义1
            </Button>
            <Button type="danger" onClick={onOk}>
              自定义2
            </Button>
          </div>
        }
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          assumenda corporis quas accusamus nesciunt quasi quisquam quibusdam
          nobis facilis dolore voluptates vero est rem repellat iste eos
          doloremque dignissimos illo! Aut quibusdam ullam, omnis minima
          corporis id? Hic quasi consequatur beatae dolorem sapiente explicabo,
          expedita incidunt odio quia harum dicta quod quae nostrum omnis eum
          consectetur reiciendis distinctio accusamus veniam.
        </div>
      </Modal>
    </div>
  );
}
