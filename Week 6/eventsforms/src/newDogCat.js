import { useState } from "react";
export default function DogCat() {
  const animals = [0, 1, 2, 3];
  const [animalImgUrl, setAnimalImgUrl] = useState(""); //boolean flag;

  const handleShowCat = () => {
    setAnimalImgUrl(Cat);
  };
  const handleShowDog = () => {
    setAnimalImgUrl(Dog);
  };
  const handleShowBunny = () => {
    setAnimalImgUrl(Bunny);
  };

  return (
    <div>
      <button onClick={handleShowCat}>Cat</button>
      <button onClick={handleShowDog}>Dog</button>
      <button onClick={handleShowBunny}>BUnny</button>
    </div>
  );
}
