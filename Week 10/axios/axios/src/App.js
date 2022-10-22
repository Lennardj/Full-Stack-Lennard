import axios from "axios";
import "./App.css";

function App() {
  axios.get("https://reqres.in/api/users").then(function (response) {
    console.log(response);
  });
  return <div className="App"></div>;
}

export default App;
