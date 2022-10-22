import "./App.css";
import { useEffect, useState } from "react";

// function handleChange(event) {
//   console.log(event.target.value);
//   // let newCity = event.target.value;
// }

function App() {
  // const [currentTemp, setCurrentTemp] = useState();
  const [weatherData, setWeatherData] = useState();
  const [currentCity, setCurrentCity] = useState("Auckland");
  const [userEnteredCity, setUserEnteredCity] = useState();

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=50bd53ed98f546f0bf8220843221210&q=${currentCity}&aqi=no`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        // setCurrentTemp(res.current.temp_c);
        // To refactor this code we can store the whole response instead of just one variable
        setWeatherData(res);
        // we've only store one variable here
        // setCurrentCity(res.location.name);
      });
  }, [currentCity]);

  function handleChange(e) {
    // console.log(e.target.value);
    setUserEnteredCity(e.target.value);
  }
  function handleSubmit() {
    setCurrentCity(userEnteredCity);
  }

  return (
    <div className="App">
      {/* This can be replace using th weather data state */}
      The temp in {currentCity} is{" "}
      {weatherData ? weatherData.current.temp_c : "Please wait"}
      <div>
        <label>Input your city</label>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
