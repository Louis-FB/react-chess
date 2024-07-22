//import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  // const [board, setBoard]: any[] = useState([
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  //   [0, 1, 2, 3, 4, 5, 6, 7],
  // ]);

  const [testArray, setTestArray] = useState([1, 2, 3]);

  return (
    <>
      <div>React chess</div>
      <Board squares={testArray} />
    </>
  );
}

export default App;
