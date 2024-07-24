import { Coords } from "./data/classes";
import { Colours } from "./data/types";

interface PropsInterface {
  value: any;
  squareColour: Colours;
  coords: Coords;
  turn: Colours;
  onSelect: Function;
  highlight: boolean;
}

export default function Square(Props: PropsInterface) {
  return (
    <div
      className={`${Props.squareColour} ${
        Props.highlight ? "highlight" : ""
      } square`}
      onClick={() => Props.onSelect(Props.value.getColour(), Props.coords)} // formerly Props.value.coords
    >
      <span className="icon">{Props.value ? Props.value.getIcon() : null}</span>
    </div>
  );
}
