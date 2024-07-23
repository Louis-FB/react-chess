import { useState } from "react";
import Square from "./Square";
import { Coords } from "./data/classes";

// interface Props {
//   squares: any[];
// }

export default function Board(Props: any) {
  return (
    <div className="board">
      {Props.squares.map((row: any, rowKey: number) => {
        return (
          <div className="row" key={rowKey}>
            {/* {rowKey++} */}
            {row.map((square: any, colKey: number) => (
              <Square
                key={colKey}
                value={square ? square : null}
                colour={(rowKey + colKey) % 2 === 0 ? "black" : "white"}
                coords={new Coords(rowKey, colKey)}
              />
              // {() => setFirstBlack(!firstBlack)};
            ))}
          </div>
        );
      })}
    </div>
  );
}
