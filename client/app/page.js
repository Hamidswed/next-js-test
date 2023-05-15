"use client";
import AddTask from "./addTask";
import styles from "./page.module.css";
import ToDoList from "./todoList";
import Image from "next/image";
import Svg from "./../public/back.svg";
import { useState, useEffect } from "react";

// export const url = "https://todo-backend-u5sb.onrender.com";
export const url = "http://localhost:8000";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.pageBack}>
      <AddTask tasks={tasks} fetchTasks={fetchTasks}/>
      <ToDoList tasks={tasks} fetchTasks={fetchTasks}/>
      <Image src={Svg} alt="back" />
    </div>
  );
}
