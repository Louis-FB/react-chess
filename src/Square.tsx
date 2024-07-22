import React from "react";

interface Props {
  colour: string;
}

export default function Square(Props: any) {
  return (
    <div className={Props.colour == "black" ? "black" : "white"}>Square</div>
  );
}
