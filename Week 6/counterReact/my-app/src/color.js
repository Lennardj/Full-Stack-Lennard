import { useState } from "react";

function Color() {
  const [colour, setColour] = useState();

  const changeColour = function () {
    switch (colour) {
      case "red":
        setColour("blue");
        break;
      case "blue":
        setColour("green");
        break;
      case "green":
        setColour("orange");
        break;
      case "orange":
        setColour("yellow");
        break;
      default:
        setColour("red");
        break;
    }
  };
  return (
    <div>
      <h1 style={{ background: colour }}>
        {" "}
        This element is going to change color
      </h1>
      <button onClick={changeColour}>Change Color</button>
    </div>
  );
}

export default Color;
