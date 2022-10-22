import { useState } from "react";
export default function DogCat() {
  const [showDog, setShowDog] = useState(false); //boolean flag;
  const [showCat, setShowCat] = useState(false); //boolean flag;

  const changeDog = () => setShowDog(!showDog); // toggle between true & false
  const changeCat = () => setShowCat(!showCat);
  return (
    <div>
      <button onClick={changeDog}>Click to change Dog</button>
      <p>
        {showDog === true ? (
          <img src="./cat.jpg" height={100} width={100}></img>
        ) : (
          <img src="./dog.jpg" height={100} width={100}></img>
        )}
      </p>
      <br />

      <button onClick={changeCat}>Click to change cat</button>

      <p>
        {showCat === true ? (
          <img src="./dog.jpg" height={100} width={100}></img>
        ) : (
          <img src="./cat.jpg" height={100} width={100}></img>
        )}
      </p>
    </div>
  );
}
