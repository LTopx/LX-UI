import { Confirm, Button } from "../../components";

export default function () {
  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quo ab quis odio maxime, distinctio ea nesciunt provident cumque tempora libero officia fuga accusamus consequuntur ipsum recusandae facere voluptatem sapiente.";

  const onOk = () => {
    console.log("ok");
  };

  return (
    <Confirm
      title="这是一个标题"
      content={content}
      type="primary"
      maskClosable
      onOk={onOk}
    >
      <Button type="primary">Confirm</Button>
    </Confirm>
  );
}
