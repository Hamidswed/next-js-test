"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { url } from "./page";

const AddTask = () => {
  const [task, setTask] = useState({ name: "", date: "", isDone: false });
  const [error, setError] = useState(false);
  const addNameHandler = (e) => {
    setTask({ ...task, name: e.target.value });
  };
  const addDateHandler = (e) => {
    setTask({ ...task, date: e.target.value });
  };

  const addTask = async () => {
    if (task.name === "") {
      setError(true);
      return;
    }
    setError(false);
    await fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    setTask({ name: "", date: "" });
  };
  return (
    <div className={styles.addTask}>
      <input
        type="text"
        onChange={addNameHandler}
        value={task.name}
        placeholder={error ? "Please add a task..." : null}
        style={error ? { border: "1px solid red" } : null}
        requsted="true"
      />
      <input type="date" onChange={addDateHandler} value={task.date} />
      <button onClick={addTask}>Add</button>
    </div>
  );
};
export default AddTask;
