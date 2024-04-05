import React, {useState, useEffect} from "react";
import TaskAdd from "./TaskAdd";
import Task from "./Task";

const ColumnTodo = ({moveTaskToNextColumn}) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks"))
    ||  []);

  const addTask = (task) => {
    const trimmedText = task.text.trim();
    const trimmedDescription = task.description.trim();
    if (!trimmedText || !trimmedDescription) {
      return;
    }
    task.columnId = 1;
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const updateTask = (taskId, newValue) => {
    if (
      !newValue.text ||
      newValue.text === "" ||
      !newValue.description ||
      newValue.description === ""
    ) {
      return;
    }
    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const removeTask = (id) => {
    const removeArr = tasks.filter((task) => task.id !== id);
    setTasks(removeArr);
  };



  return (
    <div>
      <h1>Todo</h1>
      <TaskAdd onSubmit={addTask} columnId="1" />
      
      <Task
        tasks={tasks}
        removeTask={removeTask}
        updateTask={updateTask}
        columnId
        moveTaskToNextColumn={moveTaskToNextColumn}
      />
      
    </div>
  );
};

export default ColumnTodo;
