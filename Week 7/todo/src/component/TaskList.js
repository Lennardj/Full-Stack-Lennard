function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div className="Task-List">
      {tasksArray.map(function (task, index) {
        return (
          <h3 className="TaskList-Task">
            {index + 1}. {task}{" "}
            <button
              className="TaskList-delete_icon"
              onClick={() => deleteTaskFromArray(task)}
            >
              x
            </button>
          </h3>
        );
      })}
    </div>
  );
}

export default TaskList;
