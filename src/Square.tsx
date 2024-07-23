import React from "react";

interface Props {
  value: number;
  colour: string;
}

export default function Square(Props: any) {
  return (
    <div
      style={{ backgroundColor: Props.colour }}
      className="square"
      onClick={() => console.log(`Value: ${Props.value}`)}
    >
      {Props.value}
    </div>
  );
}
