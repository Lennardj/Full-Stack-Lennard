import Button from "@mui/material/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button variant="text" color="secondary" href="http://www.google.com">
        Click Me
      </Button>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </div>
  );
}

export default App;
