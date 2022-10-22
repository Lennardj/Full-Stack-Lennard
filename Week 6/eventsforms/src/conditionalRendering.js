import { useState } from "react";
function CondRendering() {
  const [showContent, setShowContent] = useState(false); //boolean flag;
  const changeContent = () => setShowContent(!showContent); // toggle between true & false
  return (
    <div>
      <br />
      <div>
        {/* condition? true statement : false statement  */}
        {showContent === true
          ? "Congrats you've found the hidden content"
          : "Click the button"}
      </div>
      <button onClick={changeContent}>Click Here</button>
    </div>
  );
}
export default CondRendering;
