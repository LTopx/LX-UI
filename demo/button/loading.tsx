import React from "react";
import { Button } from "../../components";

export default function () {
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  const onClick1 = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };

  const onClick2 = () => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="success" loading>
          Loading
        </Button>
        <Button type="primary" rounded loading>
          Loading
        </Button>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Button type="primary" loading={loading1} onClick={onClick1}>
          Loading
        </Button>
        <Button type="success" loading={loading2} onClick={onClick2}>
          Loading
        </Button>
      </div>
    </div>
  );
}
