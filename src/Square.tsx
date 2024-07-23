import React from "react";
import { Coords, Piece } from "./data/classes";
import { Colours } from "./data/types";

interface Props {
  value: any;
  colour: Colours;
  coords: Coords;
  turn: Colours;
}

export default function Square(Props: any) {
  var turn: Colours = "white";

  const logCoords = (coords: Coords) => {
    console.log(`y: ${coords.getY()}, x: ${coords.getX()}`);
  };

  function handleSelect() {
    console.log(`Colour: ${Props.colour} Turn: ${Props.turn}`);
    if (Props.colour === turn) {
      console.log("Correct colour");
    } else {
      console.log("Incorrect colour");
    }
  }

  return (
    <div
      //style={{ backgroundColor: Props.colour }}
      className={`${Props.colour} square`}
      onClick={() => handleSelect()}
    >
      <span className="icon">{Props.value ? Props.value.getIcon() : null}</span>
    </div>
  );
}
