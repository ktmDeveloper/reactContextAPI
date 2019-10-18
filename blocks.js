import React, { useContext } from "react";
import { OpenContext } from "./openContext";

const Block = ({ val }) => {
  const [openIdx, setOpenIdx] = useContext(OpenContext);

  let clickHandler = e => {
    if (openIdx === val) {
      setOpenIdx(null);
    } else {
      setOpenIdx(val);
    }
  };
  return (
    <div
      className={"block " + (openIdx === val ? "clicked" : "")}
      onClick={clickHandler}
    >
      {val}
    </div>
  );
};

export default Block;
