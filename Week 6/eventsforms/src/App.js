import Forms from "./Forms";
import "./App.css";
import CondRendering from "./conditionalRendering";
import DogCat from "./dogCat";

function App() {
  return (
    <div className="App">
      <div>
        <Forms></Forms>
      </div>

      <div>
        <CondRendering />
      </div>
      <br />
      <div>
        <DogCat></DogCat>
      </div>
    </div>
  );
}

export default App;
