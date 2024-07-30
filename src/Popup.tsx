import { Colours } from "./data/types";

interface PropsInterface {
  onReset: Function;
  colour: Colours;
}

export default function Popup(props: PropsInterface) {
  return (
    <div className="pop-up-container">
      <div className="pop-up">
        <p>
          {props.colour.charAt(0).toUpperCase() + props.colour.slice(1)} won
        </p>
        <button className="pop-up-btn" onClick={() => props.onReset()}>
          Play again
        </button>
      </div>
    </div>
  );
}
