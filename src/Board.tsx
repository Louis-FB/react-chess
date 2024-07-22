import React from "react";
import Square from "./Square";

interface Props {
  squares: any[];
}

export default function Board(Props: any) {
  return Props.squares.map((item: any) => <Square colour={"black"} />);
}
