import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <span>A piece of text.</span>
      <Divider orientation="left">Text</Divider>
      <span>A piece of text.</span>
      <Divider dashed orientation="center">
        Text
      </Divider>
      <span>A piece of text.</span>
      <Divider orientation="right">Text</Divider>
      <span>A piece of text.</span>
    </div>
  );
}
