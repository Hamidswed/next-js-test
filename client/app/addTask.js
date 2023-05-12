"use client";
import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({ name: "", date: "" });
  const addNameHandler = (e) => {
    setTask({ ...task, name: e.target.value });
  };
  const addDateHandler = (e) => {
    setTask({ ...task, date: e.target.value });
  };

  const addTask = async () => {
    await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    setTask({ name: "", date: "" });
  };
  return (
    <div>
      <input type="text" onChange={addNameHandler} value={task.name} />
      <input type="date" onChange={addDateHandler} value={task.date} />
      <button onClick={addTask}>Add</button>
    </div>
  );
};
export default AddTask;
