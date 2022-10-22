import "./App.css";
import Color from "./color.js";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [minuscount, minusCount] = useState(100);
  const [sum, setSum] = useState(0);
  const [temp, setTemp] = useState();

  function updateCount() {
    console.log("clicked!");
    setCount(count + 1);
  }

  function minus() {
    console.log("clicked!");
    minusCount(minuscount - 1);
  }

  useEffect(
    function () {
      console.log("Only when add is clicked");
      console.log(`The count in currently at ${count}`);
      setSum(sum + 1);
      console.log(`the sum is at ${sum}`);
    },
    [count]
  );

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add one!</button>
      <div>Count: {minuscount}</div>
      <button onClick={minus}>Minus one</button>
      <Color></Color>
    </div>
  );
}

export default App;
