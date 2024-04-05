import { useEffect, useState } from "react";
import Task from "./Task";

const ColumnDone = () => {
  const [tasks, setTasks] = useState([]);
    // JSON.parse(localStorage.getItem("tasks"))
    // ||  []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || newValue.text === "") {
      return;
    }
    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const removeTask = (id) => {
    const removeArr = [...tasks].filter((task) => task.id !== id);
    setTasks(removeArr);
  };



  return (
    <div>
      <h1>Done</h1>
      <Task
        tasks={tasks}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default ColumnDone;
