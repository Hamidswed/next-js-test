"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { url } from "./page";

const AddTask = ({ tasks, fetchTasks }) => {
  const [task, setTask] = useState({ name: "", date: "", isDone: false });
  const [error, setError] = useState("");
  const addNameHandler = (e) => {
    setTask({ ...task, name: e.target.value });
  };
  const addDateHandler = (e) => {
    setTask({ ...task, date: e.target.value });
  };
  const duplicatedTask = tasks.some((item) => item.name === task.name);
  const addTask = async () => {
    if (task.name === "") {
      setError("This field can't be empty!");
      return;
    }
    if (duplicatedTask) {
      setError("The task is already in the list!");
      return;
    }
    setError(false);
    await fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((res) => console.log(res));
    setTask({ name: "", date: "", isDone: false });
    fetchTasks();
  };
  return (
    <div className={styles.addTask}>
      <input
        type="text"
        name="Name"
        onChange={addNameHandler}
        value={task.name}
        placeholder="Please add a task..."
        style={error ? { border: "1px solid red" } : null}
        required
      />
      <input
        type="date"
        name="Date"
        onChange={addDateHandler}
        value={task.date}
      />
      <button onClick={addTask}>Add</button>
      <p>{error}</p>
    </div>
  );
};
export default AddTask;
