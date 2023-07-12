import { Confirm, Button } from "../../components";
import { Loading_line } from "../../components/icon";

export default function () {
  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quo ab quis odio maxime, distinctio ea nesciunt provident cumque tempora libero officia fuga accusamus consequuntur ipsum recusandae facere voluptatem sapiente.";

  const onOk = () => {
    console.log("ok");
  };

  return (
    <div className="flex">
      <Confirm
        title="自定义标题按钮"
        icon={<Loading_line className="animate-spin" />}
        content={content}
        type="primary"
        onOk={onOk}
      >
        <Button type="primary">Confirm</Button>
      </Confirm>
    </div>
  );
}
