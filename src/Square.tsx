import React from "react";
import { Coords, Piece } from "./data/classes";

interface Props {
  value: any;
  colour: string;
  coords: Coords;
}

export default function Square(Props: any) {
  const logCoords = (coords: Coords) => {
    console.log(`y: ${coords.getY()}, x: ${coords.getX()}`);
  };

  return (
    <div
      //style={{ backgroundColor: Props.colour }}
      className={`${Props.colour} square`}
      onClick={() => logCoords(Props.coords)}
    >
      <span className="icon">{Props.value ? Props.value.getIcon() : null}</span>
    </div>
  );
}
