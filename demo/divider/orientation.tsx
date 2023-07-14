import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <span>这是一段文字</span>
      <Divider orientation="left">文字</Divider>
      <span>这是一段文字</span>
      <Divider dashed orientation="center">
        文字
      </Divider>
      <span>这是一段文字</span>
      <Divider orientation="right">文字</Divider>
      <span>这是一段文字</span>
    </div>
  );
}
