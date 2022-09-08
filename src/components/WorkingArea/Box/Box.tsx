import React from "react";
import { useDrop } from "react-dnd";

import { Layout } from "./Box.styled";

const Box: React.FC = () => {
  const [, dropTarget] = useDrop({
    accept: "puzzle",
  });
  return <Layout ref={dropTarget} role={"Dustbin"}></Layout>;
};

export default Box;
