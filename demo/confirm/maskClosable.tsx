import { Confirm, Button } from "../../components";

export default function () {
  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quo ab quis odio maxime, distinctio ea nesciunt provident cumque tempora libero officia fuga accusamus consequuntur ipsum recusandae facere voluptatem sapiente.";

  const onOk = () => {
    console.log("ok");
  };

  return (
    <div className="flex">
      <Confirm
        title="This is a title."
        content={content}
        type="primary"
        maskClosable={false}
        onOk={onOk}
      >
        <Button type="primary">Confirm</Button>
      </Confirm>
    </div>
  );
}
