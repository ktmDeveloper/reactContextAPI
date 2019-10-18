import React from "react";
import Block from "./block";
import { OpenProvider } from "./openContext";

const BlockContainer = () => {
  let createBlocks = () => {
    let blocks = [];
    for (let i = 1; i <= 12; i++) {
      blocks.push(<Block val={i} key={i} />);
    }
    return blocks;
  };
  return (
    <OpenProvider>
      <div className="block-cont">{createBlocks()}</div>;
    </OpenProvider>
  );
};

export default BlockContainer;
