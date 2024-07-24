import Square from "./Square";
import { Colours } from "./data/types";
import { Coords } from "./data/classes";

interface PropsInterface {
  squares: any[];
  turn: Colours;
  onSelect: Function;
  onCheck: Function;
}

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
                squareColour={(rowKey + colKey) % 2 === 0 ? "black" : "white"}
                coords={new Coords(rowKey, colKey)}
                turn={Props.turn}
                onSelect={Props.onSelect}
                highlight={Props.onCheck(new Coords(rowKey, colKey))}
              />
              // {() => setFirstBlack(!firstBlack)};
            ))}
          </div>
        );
      })}
    </div>
  );
}
