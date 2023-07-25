import React from "react";
import { Button } from "../../components";

export default function () {
  const [loading, setLoading] = React.useState(false);

  const onClick1 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
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
      <div className="flex">
        <Button type="primary" loading={loading} onClick={onClick1}>
          {loading ? "loading" : "Primary"}
        </Button>
      </div>
    </div>
  );
}
