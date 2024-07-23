import { useState } from "react";
import Square from "./Square";

interface Props {
  squares: any[];
}

export default function Board(Props: any) {
  return (
    <div className="board">
      {Props.squares.map((row: any, rowKey: number) => {
        return (
          <div className="row">
            {/* {rowKey++} */}
            {row.map((square: any, squareKey: number) => (
              <Square
                value={square}
                colour={(rowKey + squareKey) % 2 === 0 ? "black" : "white"}
              />
              // {() => setFirstBlack(!firstBlack)};
            ))}
          </div>
        );
      })}
    </div>
  );
}
