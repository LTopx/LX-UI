import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <span>A piece of text.</span>
      <Divider type="vertical" />
      <span>A piece of text.</span>
      <Divider type="vertical" dashed />
      <span>A piece of text.</span>
    </div>
  );
}
