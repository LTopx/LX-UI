import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <div>这是一段文字</div>
      <Divider />
      <div>这是一段文字</div>
      <Divider dashed />
      <div>这是一段文字</div>
    </div>
  );
}
