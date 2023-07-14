import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <span>这是一段文字</span>
      <Divider type="vertical" />
      <span>这是一段文字</span>
      <Divider type="vertical" dashed />
      <span>这是一段文字</span>
    </div>
  );
}
