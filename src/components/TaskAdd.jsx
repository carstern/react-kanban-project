import React, { useState, useEffect, useRef } from "react";

function TaskAdd(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text: title,
      description: description,
      columnId: props.columnId,
    };

    props.onSubmit(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add Task Title"
            value={title}
            onChange={handleTitleChange}
            className="add-task-input"
            ref={titleRef}
            required
          />
          <input
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={handleDescriptionChange}
            className="add-task-input"
            required
          />
        </div>
        <button className="add-task-btn">Add</button>
      </form>
    </div>
  );
}

export default TaskAdd;
