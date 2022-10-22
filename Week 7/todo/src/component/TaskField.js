import { useState } from "react";
import styles from "./TaskField.css";

function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState("");

  const changeTask = (e) => setTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTaskToArray(task);
      setTask("");
    } else {
      alert("Please input a task");
    }
    // console.log(task);
  };
  return (
    <div className="TaskField">
      <form onSubmit={submitTask} className="TaskField-form_control">
        <label className="TaskField-label">Task</label>
        <input
          className="TaskField-input"
          type="text"
          value={task}
          onChange={changeTask}
        />
        <button className="TaskField-btn">Save Task</button>
      </form>
    </div>
  );
}

export default TaskField;
