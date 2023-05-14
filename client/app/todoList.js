"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./todoItem";
import styles from "./page.module.css";
import { url } from "./page";

const ToDoList = () => {
  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, [tasks]);


  return (
    <div>
      {tasks?.length === 0 && <p className={styles.ptag}>Please add a task!</p>}
      <div className={styles.todoList}>
        {tasks?.map((item, index) => {
          return <ToDoItem key={index + 1} task={item} />;
        })}
      </div>
    </div>
  );
};
export default ToDoList;
