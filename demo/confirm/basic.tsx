import { Confirm, Button } from "../../components";

export default function () {
  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quo ab quis odio maxime, distinctio ea nesciunt provident cumque tempora libero officia fuga accusamus consequuntur ipsum recusandae facere voluptatem sapiente.";

  const onOk = () => {
    console.log("ok");
  };

  const asyncOk = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("哇哈哈");
      }, 2000);
    });
  };

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      <Confirm
        title="这是一个标题"
        content={content}
        type="primary"
        onOk={asyncOk}
      >
        <Button type="primary">Confirm</Button>
      </Confirm>
      <Confirm
        title="这是一个标题"
        content={content}
        disabled
        type="primary"
        onOk={onOk}
      >
        <Button type="primary" disabled>
          Confirm
        </Button>
      </Confirm>
      <Confirm
        title="这是一个标题"
        content={content}
        type="success"
        onOk={onOk}
      >
        <Button type="success">Confirm</Button>
      </Confirm>
      <Confirm
        title="这是一个标题"
        content={content}
        type="warning"
        onOk={onOk}
      >
        <Button type="warning">Confirm</Button>
      </Confirm>
      <Confirm title="这是一个标题" content={content} type="danger" onOk={onOk}>
        <Button type="danger">Confirm</Button>
      </Confirm>
    </div>
  );
}
