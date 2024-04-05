import React, {useState, useEffect} from "react";
import Task from "./Task";

const ColumnDoing = () => {
  const [tasks, setTasks] = useState([]);
  // JSON.parse(localStorage.getItem("tasks"))
  // ||  []);

  // useEffect(() => {
  //   const storedTasks = localStorage.getItem("tasks");
  //   if (storedTasks) {
  //     setTasks(JSON.parse(storedTasks));
  //   }
  // }, []);

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
      <h1>Doing</h1>
      <Task tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
};

export default ColumnDoing;
