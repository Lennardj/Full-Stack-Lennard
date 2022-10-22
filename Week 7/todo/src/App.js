import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TaskField from "./component/TaskField";
import TaskList from "./component/TaskList";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };
  console.log(tasksArray);

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="App-container">
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList
        tasksArray={tasksArray}
        deleteTaskFromArray={deleteTaskFromArray}
      />
    </div>
  );
}

export default App;
