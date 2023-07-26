import React from "react";
import { Divider } from "../../components";

export default function () {
  return (
    <div>
      <div>A piece of text.</div>
      <Divider />
      <div>A piece of text.</div>
      <Divider dashed />
      <div>A piece of text.</div>
    </div>
  );
}
