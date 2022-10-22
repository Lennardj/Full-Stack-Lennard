import { useState } from "react";

export default function Form() {
  const [val, setVal] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault(); // prevent default behaviour of a form submission (prevent page refresh)

    console.log(e.target);
    setInputList(val);

    const temp = [...inputList, val]; // takes current state of array and add a new value to it

    console.log(temp);
    setInputList(temp);
  };

  // const handleChange = (event) => setVal(event.target.value); // using arrow function syntax

  const handleChange = function (event) {
    setVal(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />

        <input type="submit"></input>
        <br />
        <ul>
          {inputList.map((items) => (
            <p>{items}</p>
          ))}
        </ul>
      </form>
    </div>
  );
}
