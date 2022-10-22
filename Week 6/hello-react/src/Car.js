//Normal way
//function Car(prop) {
function Car({ carName, carBrand }) {
  return (
    <div className="color">
      {" "}
      {/* The car is a {prop.carName} */}
      The car is a {carName}
      {/* The brand if the car is {prop.carBrand} */}
      <p> The brand of the car is {carBrand}</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Car;
